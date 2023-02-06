import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

const Authentication = () => {
    return (
        <div className="flex justify-around">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication