<template>
  <el-table
    :data="users"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180"/>
    <el-table-column
      prop="firstName"
      label="First Name"
      width="180"/>
    <el-table-column
      prop="lastName"
      label="Last Name"/>
  </el-table>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data: { data: users } } = await axios.get('http://localhost:3000/api/users')
    return { users }
  },
}
</script>
