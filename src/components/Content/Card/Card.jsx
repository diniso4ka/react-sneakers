import React from 'react'
import s from './Card.module.scss'
import ContentLoader from 'react-content-loader'

const Card = ({ name, price, img, onPlus, onFavorite, id, loading }) => {
   const [isAdded, setIsAdded] = React.useState()
   const [isFavorite, setIsFavorite] = React.useState(false)



   const onClickPlus = ({ }) => {
      onPlus({ name, price, img, id })
      setIsAdded(!isAdded)
   }

   const onClickFavorite = () => {
      onFavorite({ name, price, img, id })
      setIsFavorite(!isFavorite)
   }







   return (
      <div className={s.item}>
         {loading ?
            <ContentLoader
               speed={2}
               width={155}
               height={250}
               viewBox="0 0 155 265"
               backgroundColor="#f3f3f3"
               foregroundColor="#ecebeb">
               <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
               <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
               <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
               <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
               <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
            </ContentLoader> :
            <>
               <div className={s.wrapper}>
                  <img onClick={onClickFavorite} className={s.favorit} src={isFavorite ? 'https://raw.githubusercontent.com/diniso4ka/react-sneakers/1de0b622f8c07a415b2ea330ae3ee65e9a3e6f04/public/img/heart-liked.svg' : 'https://raw.githubusercontent.com/diniso4ka/react-sneakers/1de0b622f8c07a415b2ea330ae3ee65e9a3e6f04/public/img/heart-unliked.svg'} alt='unliked' />
                  <img className={s.logo} src={img} width={133} height={112} alt='logo' />
                  <h5>{name}</h5>
                  <div className={s.info}>
                     <div className={s.price}>
                        <span>ЦЕНА:</span> <br />
                        <b>{price} руб.</b>
                     </div>
                     <button onClick={onClickPlus} className={s.button}>
                        <img src={isAdded ? 'https://raw.githubusercontent.com/diniso4ka/react-sneakers/d39df04146bdc3039a6f3987f9498b716c13ca7f/public/img/checked.svg' : 'https://raw.githubusercontent.com/diniso4ka/react-sneakers/d39df04146bdc3039a6f3987f9498b716c13ca7f/public/img/plus.svg'} width={32} alt='button' />
                     </button>
                  </div>
               </div>

            </>}
      </div>

   )
}


export default Card