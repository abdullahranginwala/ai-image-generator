import React, {useState} from 'react';
import { Form, generatePath, useNavigate } from 'react-router-dom';

import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  cnost [generatingImg, setGeneratingImg] = useState(false);
  cnost [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = (e) => {

  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Create 'imagenative' and visually stunning images with AI and share them with the community</p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
        <FormField 
            LabelName="Your name"
            type="text"
            name="name"
            placeholder="Eg. John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField 
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="Eg. A comic book cover of a superhero wearing headphones"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-26 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain' />
            ) : (
              <img src="" alt="" />
            )}
          </div>
        </div>
      </form>
    </section>
  )
}

export default CreatePost
