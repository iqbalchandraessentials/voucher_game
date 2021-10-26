import Image from 'next/image'
interface FeatureItemProps {
    title : string;
    category : string;
}
export default function FeatureItem(props: FeatureItemProps) {
    const {title, category} = props;
    return (
        <div className="featured-game-card position-relative">
        <a href="/detail">
            <div className="blur-sharp">
                <img src="/img/Thumbnail-1.png" width="205" height="270" alt=""/>
            </div>
            <div className="cover position-absolute bottom-0 m-32">
                <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                       <Image src="/icon/icon-stick.svg" width="54" height="36"/>
                    </div>
                    <div>
                        <p className="fw-semibold text-white text-xl m-0">{title}</p>
                        <p className="fw-light text-white m-0">{category}</p>
                    </div>
                </div>
            </div>
        </a>

    </div>
    )
}
