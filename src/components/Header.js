import React, { useState } from 'react'
import { signOut, useSession } from "next-auth/client"
import Link from 'next/link'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@material-ui/core'

import { AccountCircle } from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none !important',
  },
  headButton: {
    marginRight: 10,
  },
  userName: {
    marginLeft: 8,
  },
  divider: {
    margin: '8px 0'
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [session] = useSession()
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Link href={'/'} passHref>
              <a className={classes.title}>
                <Typography variant="h6" color="secondary">
                  AnunX
                </Typography>
              </a>
            </Link>
            <Link href={session ? '/user/publish' : '/auth/signin'} passHref>
              <Button color="inherit" variant="outlined" className={classes.headButton}>
                Anunciar e Vender
              </Button>
            </Link>
            {
              session
                ? (
                  <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                    {
                      session.user.image
                        ? <Avatar src={session.user.image} />
                        : <AccountCircle />

                    }
                    <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                      {session.user.name}
                    </Typography>
                  </IconButton>
                )
                : null
            }

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Link href="/user/dashboard" passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>Sair</MenuItem>
            </Menu>

          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
