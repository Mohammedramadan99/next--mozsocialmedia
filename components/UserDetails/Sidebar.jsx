import React from 'react'
import { useSelector } from 'react-redux'
import Friend from './Friend'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SchoolIcon from '@mui/icons-material/School';
export default function Sidebar({ profile }) 
{
    const { userAuth, usersList } = useSelector(state => state.users)
    const followers = usersList?.filter(user =>
    {
        const u = profile?.followers?.find(f =>
        {
            if (user._id === f)
            {
                return user
            } else
            {
                return null
            }
        })
        return u
    })
    const following = usersList?.filter(user =>
    {
        const u = profile?.following?.find(f =>
        {
            if (user._id === f)
            {
                return user
            } else
            {
                return null
            }
        })
        return u
    })
    return (
        <div className='user__bottom__sidebar'>
            <div className="user__bottom__sidebar__introCard">
                <div className="user__bottom__sidebar__introCard__title">
                    intro
                </div>
                <div className="user__bottom__sidebar__introCard__content">
                    <div className="user__bottom__sidebar__introCard__content__bio">
                        Full Stack Developer
                    </div>
                    <div className="user__bottom__sidebar__introCard__content__study">
                        <SchoolIcon /> Studied at Faculty of commerce
                    </div>
                    <div className="user__bottom__sidebar__introCard__content__status">
                        <FavoriteIcon /> single
                    </div>
                </div>
            </div>
            <div className="user__bottom__sidebar__friendsCard">
                <div className="user__bottom__sidebar__friendsCard__title">
                    followers
                </div>
                <div className="user__bottom__sidebar__friendsCard__friendsList">
                    {followers?.map(user => <Friend user={user} />)}
                </div>
                <div className="user__bottom__sidebar__friendsCard__btn common_btn">see all </div>
            </div>
            <div className="user__bottom__sidebar__friendsCard">
                <div className="user__bottom__sidebar__friendsCard__title">
                    following
                </div>
                <div className="user__bottom__sidebar__friendsCard__friendsList">
                    {following?.map(user => <Friend user={user} />)}
                </div>
                <div className="user__bottom__sidebar__friendsCard__btn common_btn">see all</div>
            </div>
        </div>
    )
}
