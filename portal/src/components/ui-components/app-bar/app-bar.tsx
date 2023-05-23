import { Stack, Toolbar } from '@mui/material'
import { Topbar } from './top-bar/top-bar'
import { Navbar } from './nav-bar/nav-bar'

export const Appbar = () => {
  return (
    <Stack
      spacing={5}
      sx={{ flexGrow: 1 }}
    >
      <Topbar/>
      <Toolbar/>
      <Navbar/>
    </Stack>
  )
}
