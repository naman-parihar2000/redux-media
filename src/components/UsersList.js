import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store'

function UsersList() {
  const dispatch = useDispatch();

  useSelector((state) => {
    return state.users;
  })

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  return (
    <div>UsersList!</div>
  )

}

export default UsersList