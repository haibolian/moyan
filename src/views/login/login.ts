import { reactive } from 'vue'

const useLoginForm = () => {
  const loginForm = reactive({
    username: '',
    password: ''
  })
  const loginRules = reactive({
    username: [
      { required: true, message: '啥情况？', trigger: 'blur' },
      { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '啥情况？', trigger: 'blur' },
      { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
    ]
  })

  return {
    loginForm,
    loginRules
  }
}

const useRegistryForm = () => {
  const registryForm = reactive({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const validateConfirmPass = (rule: object[], value: string, callback: (str: any) => void) => {
    const isSame = value === registryForm.password
    callback(isSame ? undefined : new Error('两个密码不一致'))
  }

  const registryRules = reactive({
    username: [
      { required: true, message: '啥情况？', trigger: 'blur' },
      { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '啥情况？', trigger: 'blur' },
      { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
    ],
    confirmPassword: [
      { required: true, message: '啥情况？', trigger: 'blur' },
      { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
      { validator: validateConfirmPass, trigger: 'blur' }
    ]
  })
  return {
    registryForm,
    registryRules
  }
}

export { useLoginForm, useRegistryForm }