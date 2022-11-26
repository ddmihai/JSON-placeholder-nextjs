export const getAllUsers = async () => {
    const getUsersList =    await fetch('https://jsonplaceholder.typicode.com/users');
    return                  await getUsersList.json();
}


export const getSpecificUser = async id => {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return      await user.json();
}