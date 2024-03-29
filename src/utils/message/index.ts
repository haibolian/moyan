import { ElMessage } from "element-plus";
import 'element-plus/es/components/message/style/css';

// 消息
const Message = (message: string): any => {
  return ElMessage({
    showClose: true,
    message
  });
};

// 成功
const successMessage = (message: string): any => {
  return ElMessage({
    showClose: true,
    message,
    type: "success"
  });
};

// 警告
const warnMessage = (message: string): any => {
  return ElMessage({
    showClose: true,
    message,
    type: "warning"
  });
};

// 警告
const infoMessage = (message: string): any => {
  return ElMessage({
    showClose: true,
    message,
  });
};

// 失败
const errorMessage = (message: string): any => {
  return ElMessage({
    showClose: true,
    message,
    type: "error"
  });
};

export { Message, successMessage, warnMessage, errorMessage, infoMessage };
