'use client'
import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { AiOutlineGithub, AiFillYoutube, AiOutlineDropbox } from 'react-icons/ai'
import { FiGlobe } from 'react-icons/fi'
import { LiaFileUploadSolid } from 'react-icons/lia'
import { MdOutlineTextFields } from 'react-icons/md'
import { FiLink2 } from 'react-icons/fi'
import { FaGoogleDrive, FaSlack } from 'react-icons/fa'
import { RxNotionLogo } from 'react-icons/rx'

export default function Multiload(): JSX.Element {

    const [showAuth, setShowAuth] = useState(false)
    const [showFileUpload, setShowFileUpload] = useState(false)
    const [showWebLink, setShowWebLink] = useState(false)

    function toggleAuth() {
        setShowAuth(true);
        setShowFileUpload(false);
        setShowWebLink(false)
    }

    function toggleFileUpload() {
        setShowAuth(false);
        setShowFileUpload(true);
        setShowWebLink(false)
    }

    function toggleWebLink() {
        setShowAuth(false);
        setShowFileUpload(false);
        setShowWebLink(true)
    }
  return (
      <>
          <div className='w-full md:w-[550px] flex flex-col justify-center'>
              <h1 className='text-3xl font-semibold text-center'>New <span className='text-[#7248d0] font-bold'>Multi</span>Upload Component
              </h1>
              <p className='text-center text-gray-600 pt-1'>Select a data source to start creating your upload component</p>

              <div className='w-full flex flex-col gap-3 min-h-56 rounded-md mt-8 bg-white dark:bg-[#13121D] px-4 py-6 shadow-md'>
                  
                  {showAuth ? <AuthMethods /> : showFileUpload ? <FileUpload /> : showWebLink ? <WebsiteLink /> : <p>Select a data source to start uploading</p>}

                  <div className='flex min-h-16 bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md cursor-pointer py-2 px-4' onClick={toggleAuth}>
                      <Image src="/oauthicons.png" width="50" height="50" alt="oauthicons" />
                      <span className='flex-col ml-6'>
                          <h1 className='font-bold capitalize'>Bring them all in</h1>
                          <p className='text-xs md:text-sm'>Securely connect your favorite drive and bring it on.</p>
                      </span>
                  </div>

                  <div className='grid md:grid-cols-2 grid-flow-dense gap-2'>

                      <div className='flex h-10 group bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md cursor-pointer items-center px-4 gap-2 shadow-md' onClick={toggleFileUpload}>
                          <LiaFileUploadSolid size={22} className='group-hover:scale-90' /><p>Upload Files</p>
                      </div>

                      <div className='flex h-10 group bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md cursor-pointer items-center px-4 gap-2 shadow-md' onClick={toggleWebLink}>
                          <FiLink2 size={22} className='group-hover:scale-90' /><p>Link Upload</p>
                      </div>

                      <div className='flex relative h-10 group bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md cursor-pointer items-center px-4 gap-2 shadow-md'>
                          <span className='absolute text-[8px] px-1 right-2 top-2 bg-violet-800 text-gray-100 rounded-md'>Coming soon</span>
                          <AiOutlineGithub size={22} className='group-hover:scale-90' /><p>GitHub</p>
                      </div>
                      
                      <div className='flex h-10 group bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] relative rounded-md cursor-pointer items-center px-4 gap-2 shadow-md'>
                          <span className='absolute text-[8px] px-1 right-2 top-2 bg-violet-800 text-gray-100 rounded-md'>Coming soon</span>
                          <FiGlobe size={22} className='group-hover:scale-90' /><p>Website</p>
                      </div>
                      
                      <div className='flex h-10 group bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md relative cursor-pointer items-center px-4 gap-2 shadow-md'>
                          <span className='absolute text-[8px] px-1 right-2 top-2 bg-violet-800 text-gray-100 rounded-md'>Coming soon</span>
                          <MdOutlineTextFields size={22} className='group-hover:scale-90' /><p>Paste Text</p>
                      </div>
                      
                      <div className='flex h-10 group bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md cursor-pointer relative items-center px-4 gap-2 shadow-md'>
                          <span className='absolute text-[8px] px-1 right-2 top-2 bg-violet-800 text-gray-100 rounded-md'>Coming soon</span>
                          <AiFillYoutube size={22} className='group-hover:scale-90' /><p>Youtube Video</p>
                      </div>
                      

                  </div>
              </div>
          </div>
      </>
  )
}


// function GithubLink() {
//     return (
//         <div className='flex flex-col transition-all'>
//             <label htmlFor="repo-url" className="text-base font-medium">Enter your public GitHub URL:</label>
//             <div className='flex relative'>
//                 <input type="url" id="repo-url" name="repo-url" className="w-full mt-2 border rounded-lg py-2 px-3 text-base bg-gray-200 dark:bg-[#1c1a2b] dark:text-white focus:outline-none focus:ring-0 border-gray-700 focus:ring-gray-500 focus:ring-transparent" placeholder="github.com/username/repo" required />
//                 <button className='absolute right-2 text-white top-4 bg-violet-700 rounded-md px-2 py-1 text-[12px] font-medium'>Upload</button>
//             </div>
//             <div className=" mt-3 text-sm text-gray-500">By default we collect all of the files from the repo</div>
//         </div>
//     )
// }

function WebsiteLink() {
    return (
        <div className='flex flex-col transition-all'>
            <label htmlFor="repo-url" className="text-base font-medium">Enter your file link:</label>
            <div className='flex relative'>
                <input type="url" id="repo-url" name="repo-url" className="w-full mt-2 border rounded-lg py-2 px-3 text-base bg-gray-200 dark:bg-[#1c1a2b] dark:text-white focus:outline-none focus:ring-0 border-gray-700 focus:ring-gray-500 focus:ring-transparent" placeholder="https://example.com/path-to-file" required />
                <button className='absolute right-2 text-white top-4 bg-violet-700 rounded-md px-2 py-1 text-[12px] font-medium'>Upload</button>
            </div>
            <div className=" mt-3 text-sm text-gray-500">Paste the link to the file you wish to upload</div>
        </div>
    )
}

function FileUpload() {

    const [showProgress, setShowProgress] = useState<boolean>(false)
    const [maxFileSize] = React.useState<number>(4194304);
    const [fileSize, setFileSize] = useState<number>(0)
    const [loadPercentage, setLoadPercentage] = useState<number>(0)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach((file: Blob) => {
            const reader = new FileReader()
            reader.onerror = () => console.log('file reading has failed')
            reader.onprogress = (evt: ProgressEvent<FileReader>) => {
                //track upload progress via api
                let percentage = Math.floor((evt.loaded * 100) / evt.total);
                setTimeout(() => {
                    setLoadPercentage(percentage)
                }, 500);
            }
            reader.onload = () => {
                // Do whatever you want with the file contents. call api or send to s3 bucket
                const binaryStr = reader.result;
                setFileSize(file.size)
                setShowProgress(true);
            }

            reader.readAsArrayBuffer(file)
        })
    }, [])

    const { getRootProps, getInputProps, isDragReject, isDragAccept, acceptedFiles, fileRejections } = useDropzone({
        onDrop,
        maxSize: maxFileSize,
    });
    return (
        <>
            <div className={`p-8 mt-5 border-2 border-dashed rounded-lg ${isDragAccept ? 'border-violet-600 bg-violet-50' : isDragReject ? 'border-red-500 bg-red-50' : ''}`} {...getRootProps()}>
                <div className='flex mx-auto justify-center mb-6 bg-violet-200 rounded-full w-[70px] h-[70px]'>
                    <Image style={{ objectFit: "contain" }} src="/cloud-upload.png" height="60" width="60" alt="upload" />
                </div>
                <input {...getInputProps()} />
                <p className='text-xs font-medium text-center text-gray-600'>{isDragAccept ? "Drop file(s) here" : isDragReject ? "File type not allowed" : fileSize > maxFileSize ? isDragReject : "Drag file(s) here"}</p>
                <p className='text-center text-[10px] text-gray-400'>
                    or, click to browse (4 MB max)
                </p>

            </div>
            {/* <p className='text-center text-[9px] text-gray-400 mt-2'>
                Some data formats, such as dates, numbers, and coors, may not be recognized.
                <a href="#" className='underline'>Learn more.</a>
            </p> */}
        </>
    )
}

function AuthMethods() {
    
    return (
        <>
            <div className='flex justify-start gap-5'>
                <span className='flex rounded-md border border-gray-400 p-2 gap-2 cursor-pointer'>
                    <AiOutlineDropbox />
                    <p className='text-sm font-semibold'>DropBox</p>
                </span>
                <span className='flex rounded-md border border-gray-400 p-2 gap-2 cursor-pointer'>
                    <FaGoogleDrive />
                    <p className='text-sm font-semibold'>Google</p>
                </span>
                <span className='flex rounded-md border border-gray-400 p-2 gap-2 cursor-pointer'>
                    <FaSlack />
                    <p className='text-sm font-semibold'>Slack</p>
                </span>
                <span className='flex rounded-md border border-gray-400 p-2 gap-2 cursor-pointer'>
                    <RxNotionLogo />
                    <p className='text-sm font-semibold'>Notion</p>
                </span>
            </div>
            <p className='text-xs'>Authenticate any of the following to import file directly.</p>
        </>
    )
}