import { ElMessageBox } from 'element-plus';
import 'element-plus/es/components/message-box/style/css';

export const MessageAlert = (title: string, content: string, callback: () => void, btnText: string = '确定') => {
  ElMessageBox.alert(content, title, {
    confirmButtonText: btnText,
    callback: callback
  })
}

export const MessageConfirm = (title: string, content: string, confirmCallback?:any, cancelCallback?:any, type = 'warning') => {
  ElMessageBox.confirm(content, title, {
    type,
    closeOnClickModal: false,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    showClose: false,
    autofocus: false
  }).then(() => {
    confirmCallback?.()
  }).catch(() => {
    cancelCallback?.()
  })
}
