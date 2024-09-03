import React, { useState, useEffect } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from "../components"
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])

    const userStatus = useSelector(state => state.auth.status)



    useEffect(() => {
        if (userStatus) {
            appwriteService.getPosts()
                .then((post) => {
                    if (post) setPosts(post.documents)
                })
        } else setPosts([])
    }, [userStatus])
    // modified
    if (posts.length === 0 && userStatus) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1
                                className='text-2xl font-bold hover:text-gray-500'
                            >No Post Available</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    } else if (posts.length === 0 && !userStatus) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1
                                className='text-2xl font-bold hover:text-gray-500'
                            >Please login to view post</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home