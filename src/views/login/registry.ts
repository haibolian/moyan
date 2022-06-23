import { Ref } from "vue"
import { FormInstance, FormRules } from "element-plus"
import { errorMessage } from "@/utils/message"
import { registry } from "@/api/user"
import { init } from "./helper"


const useRegistryForm = () => {
  const registry_ref: Ref = ref<FormInstance>()
  const registryForm = reactive({
    username: "",
    password: "",
    confirmPassword: "",
  })

  const handleRegistry = async () => {
    const valid = await registry_ref.value.validate()
    if (!valid) return
    const { data, message, success } = await registry({
      username: registryForm.username,
      password: registryForm.password,
    })
    if (!success) return errorMessage(message)
    init(data)
  }

  const validateConfirmPass = (
    rule: any,
    value: string,
    callback: (str: any) => void
  ) => {
    const isSame = value === registryForm.password
    callback(isSame ? undefined : new Error("两个密码不一致"))
  }

  const registryRules = reactive<FormRules>({
    username: [
      { required: true, message: "用户名不能为空", trigger: "blur" },
      { min: 5, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" },
    ],
    password: [
      { required: true, message: "密码不能为空", trigger: "blur" },
      { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
    ],
    confirmPassword: [
      { required: true, message: "确认密码不能为空", trigger: "blur" },
      { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
      { validator: validateConfirmPass, trigger: "blur" },
    ],
  })
  return {
    registryForm,
    registryRules,
    registry_ref,
    handleRegistry,
  }
}

export { useRegistryForm }
