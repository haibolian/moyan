import { reactive, Ref } from 'vue'
import { FormRules, FormInstance } from 'element-plus'
import { errorMessage } from '@/utils/message'
import { login } from '@/api/user'
import { init } from './helper'
import { LoginResult } from './type'

const useLoginForm = () => {
  const login_ref: Ref = ref<FormInstance>()
  const loginForm = reactive({
    username: '',
    password: ''
  })

  const handleLogin = async () => {
    const valid = await login_ref.value.validate()
    if (!valid) return
    const { data, message, success }: LoginResult = await login({
      username: loginForm.username,
      password: loginForm.password
    })
    if (!success) return errorMessage(message)
    init(data)
  }

  const loginRules = reactive<FormRules>({
    username: [
      { required: true, message: '用户名不能为空', trigger: 'blur' },
      { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
      { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
    ]
  })

  return {
    loginForm,
    loginRules,
    login_ref,
    handleLogin
  }
}


export { useLoginForm }