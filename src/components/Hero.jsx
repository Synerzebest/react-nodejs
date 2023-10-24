import heroImage from '/images/main.svg';


const Hero = () => {
    return(
        <div className='relative top-10 flex items-center justify-around w-11/12 m-auto gap-10'>
            <div className='w-3/4'>
                <p className='text-4xl'>Réseau de la Diaspora Sénégalaise</p>
                <div className="pt-6">
                    <p className='text-2xl'>Quelle est notre devise ?</p>
                    <p className='text-lg'>La diaspora au service du Sénégal</p>
                </div>
                <div className='pt-6'>
                    <p className='text-2xl'>Quel est notre but ?</p>
                    <p className='text-lg'>Identifier, échanger ainsi que partager nos compétences et développer de nouvelles idées pour un Sénégal radieux.</p>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <img className=' w-1/2' src={heroImage}></img>
            </div>
        </div>
    )
}

export default Hero;