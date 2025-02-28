import HeroSub from "@/components/SharedComponent/HeroSub"
import NotFound from "@/components/NotFound"

export const metadata = {
  title: "404 Page | Venus "
}

const ErrorPage = () => {
  return (
    <>
      <HeroSub title="404" />
      <NotFound />
    </>
  )
}

export default ErrorPage
