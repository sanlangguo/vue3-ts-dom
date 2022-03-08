const user = {
  name: '测试',
  token: 'hashtoken'
}

export const login = async function () {
  const res = await useAsyncData('login', () => $fetch('/api/todos'))
  return user
}