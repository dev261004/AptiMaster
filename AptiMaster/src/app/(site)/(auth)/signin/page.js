import Signin from "@/components/Auth/SignIn"
import Breadcrumb from "@/components/Common/Breadcrumb"

export const metadata = {
  title: "Sign In | Property"
}

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />

      <Signin />
    </>
  )
}

export default SigninPage
