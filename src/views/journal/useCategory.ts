import { getList as getCategory, create } from '@/api/category';
import { errorMessage } from '@/utils/message';

export const useCategory = () => {
  const categoryOptions = ref([])
  const getCategoryOptions = async () => {
    const { success, message, data } = await getCategory()
    if(!success) return errorMessage(message)
    categoryOptions.value = data
  }
  const createCategory = async (categoryName) => {
    const { success, message, data } = await create({ name: categoryName })
    if(!success) return errorMessage(message)
    categoryOptions.value.unshift(data)
    return data
  }

  return {
    categoryOptions,
    getCategoryOptions,
    createCategory
  }
}