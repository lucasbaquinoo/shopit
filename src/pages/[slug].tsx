import { GetServerSideProps } from "next"

export default function Product() {
  return <h1>Produto</h1>
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  console.log(ctx.req.cookies)
  return {
    props: {}
  }
}