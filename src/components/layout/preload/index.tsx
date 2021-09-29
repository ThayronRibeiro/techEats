import Link from "next/link";

export const Preload: React.FC = () => {
    return (
        <div className='main-content columns is-fullheight'>
            <div className='container column is-centered'>
                <figure className="image is-128x128">
                    <Link href='/dashboard'>
                    <img className='is-rounded' src="https://bulma.io/images/placeholders/128x128.png" />
                    </Link>
                </figure>
            </div>
            <div>
                <i className='fas fa-spinner fa-pulse'/>
            </div>
        </div>
    )
}