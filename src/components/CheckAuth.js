import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/client"
import { Router } from "@material-ui/icons"

const CheckAuth = ( { Component, pageProps }) => {
  const [ session, loading ]= useSession()
  const router = useRouter()

  useEffect(() => {
    if(loading) return

    if (!session) {
      router.push('/auth/signin')
    }
  }, [session, loading])

  if (session) {
    return <Component {...pageProps} />
  } 
  
  return 'Carregando...'
}

export default CheckAuth