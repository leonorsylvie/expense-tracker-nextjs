import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { checkUser } from "@/lib/checkUser"

const Header = async () => {
    const user = await checkUser();
    
    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <h2>Expense Tracker</h2>
                <div>
                    {/* if user is not signed in it will show the sign in button */}
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    {/* if user is signed in it will show the user button */}
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>  
    )
}

export default Header