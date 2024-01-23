import { FC, ReactNode, useState } from 'react';
import { Button } from 'src/components/Button';
import { useBlog } from 'src/context/Blog';

export const PostForm = (props) => {
   const { user } = useBlog();
   const {
      onSubmit,
      postTitle,
      postContent,
      postName,
      setPostName,
      setPostContent,
      setPostTitle,
      formHeader,
      handleImageChange,
      buttonText = 'Post',
   } = props;
   const [loading, setLoading] = useState(false);

   //  console.log({ postContent, postTitle, setPostImage });

   return (
      <div className="rounded-lg py-4 px-6 bg- flex flex-col ">
         {formHeader}

         <input
            value={postName}
            onChange={(e) => setPostName(e.target.value)}
            type="text"
            placeholder="Post Author Name"
            className="bg-white rounded-md h-10 px-4 black mb-3"
         />
         <input
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            type="text"
            placeholder="Post title"
            className="bg-white rounded-md h-10 px-4 black"
         />
         <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            name="content"
            id="content-area"
            rows={3}
            placeholder="Describe your post..."
            className="bg-white rounded-md px-4 py-2 mt-3 black"
         ></textarea>

         <Button
            className="mt-3"
            disabled={!user}
            loading={loading}
            onClick={async () => {
               setLoading(true);
               await onSubmit();
               setLoading(false);
            }}
         >
            {buttonText}
         </Button>
      </div>
   );
};
