export default function NavBar() {
    return (

        <div className="fixed w-70 h-12 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm shadow-md items-center flex left-[50%] translate-x-[-50%] top-10 z-10 rounded-full px-8 border-b-[rgba(0,0,0,0.1)] border-b">
            <div className="w-full flex justify-between items-center text-white/90">
                <p className="text-sm">Contact</p>
                <p className="text-xl font-bold">hong</p>
                <p className="text-sm">About</p>

            </div>
        </div>
    );
}