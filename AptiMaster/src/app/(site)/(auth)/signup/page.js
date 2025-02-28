import SignUp from "@/components/Auth/SignUp"
import Breadcrumb from "@/components/Common/Breadcrumb"

export const metadata = {
  title: "Sign Up | Property"
}

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign Up Page" />

      <SignUp />
    </>
  )
}

export default SignupPage
