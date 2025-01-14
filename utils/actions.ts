'use server'
import { readFile, writeFile } from 'fs/promises'
import { revalidatePath } from 'next/cache'

type User = {
  id: string
  firstName: string
  lastName: string
}

export const createUsers = async (prevState: any, formData: FormData) => {
  'use server'
  console.log(prevState)

  await new Promise((resolve) => setTimeout(resolve, 2000))
  const newUser: User = {
    id: new Date().getTime().toString(),
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
  }
  console.log(newUser)
  try {
    // throw new Error('Failed to create user')   // uncomment this line to test error handling
    await saveUser(newUser)
    revalidatePath('/actions')
    return 'User created successfully'
  } catch (error) {
    console.log(error)
    return 'Failed to create user'
  }
}

export const getUsers = async (): Promise<User[]> => {
  const data = await readFile('users.json', 'utf-8')
  const users = data ? JSON.parse(data) : []
  return users
}

export const saveUser = async (user: User) => {
  const users = await getUsers()
  console.log('Existing users:', users)
  users.push(user)
  await writeFile('users.json', JSON.stringify(users))
}

// Delete user action: hidden-input method
export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string
  const users = await getUsers()
  const updatedUsers = users.filter((user: User) => user.id !== id)
  await writeFile('users.json', JSON.stringify(updatedUsers))
  revalidatePath('/actions')
}

// Delete user action: bind method
export const removeUser = async (id: string) => {
  const users = await getUsers()
  const updatedUsers = users.filter((user: User) => user.id !== id)
  await writeFile('users.json', JSON.stringify(updatedUsers))
  revalidatePath('/actions')
}
