
const SignInPage = ({ params }: { params: { "signIn": string[] } }) => {
  console.log(params);
  console.log(params.signIn);


  return (
    <div>SignInPage</div>
  )
}

export default SignInPage