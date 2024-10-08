import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import appwriteService from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || post?.$id || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    // console.log(post)

    const navigate = useNavigate()
    // TODO: what actually inside userData
    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) => {
        console.log('Data in form : update ::' , data)
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            console.log('file uploaded for editing purpose : UPDATE :: ', file)

            if (file) {
                console.log('File Data inside if when post featuredImage is deleting :: ', file)
                appwriteService.deleteFile(post.featuredImage)
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined
            })

            console.log('After updating the post : dbPost - DATA ::' , dbPost)

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        } else {
            // TODO : conditional check is necessary here...
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                })

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') return value
            .trim()
            .toLowerCase()
            // .replace(/^[a-zA-Z\d\s]+/g, '-')
            .replace(/\s+/g, '-');

        return ''
    }, [])


    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, {
                    shouldValidate: true
                }))
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)}
            className='flex flex-wrap'
        >
            <div className='w-2/3 px-2'>
                <Input
                    label="Title: "
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", {
                        required: true
                    })}
                />

                <Input
                    label="Slug: "
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", {
                        required: true
                    })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), {
                            shouldValidate: true
                        })
                    }}
                />

                <RTE label="content: " name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className='w-1/3 px-2'>
                <Input
                    label="Featured Image: "
                    type="file"
                    className="mb-4"
                    accept="image/png , image/jpg , image/jpeg , image/gif"
                    {...register("image", {
                        required: !post
                    })}
                />
                {post && (
                    <div className='w-full mb-4'>
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className='rounded-lg'
                        />
                    </div>
                )}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", {
                        required: true
                    })}
                />

                <Button type="submit" bgColor={post ? "bg-green-500" : undefined}
                    className="w-full"
                >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm