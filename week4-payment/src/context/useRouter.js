import {useContext} from "react"
import {RouterContext} from "../component/CustomBrowserRouter"

export default function useRouter() {
  return useContext(RouterContext)
}