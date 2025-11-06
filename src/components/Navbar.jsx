import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-[#232323] text-white w-screen px-8 py-6 flex justify-between items-center">
                <a className="cursor-pointer hover:text-[#f22387]"
                    onClick={() => { navigate("/") }}>Sebastopol Model</a>
                <ul className='flex justify-between items-center'>
                    <li className="cursor-pointer hover:text-[#f22387] px-2"
                        onClick={() => { navigate("/") }}>Home</li>
                    {/* <li className="cursor-pointer hover:text-[#f22387] px-2"
                        onClick={() => { navigate("/rotate") }}>Rotatable</li> */}
                    <li className="cursor-pointer hover:text-[#f22387] px-2"
                        onClick={() => { navigate("/rotate") }}>Rotatable</li>
                </ul>
            </div>
        </>
    )
}