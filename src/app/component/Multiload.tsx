'use client'
import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { AiFillYoutube, AiOutlineDropbox, AiOutlineGithub } from 'react-icons/ai'
import { MdOutlineTextFields, MdOutlineUploadFile } from 'react-icons/md'
import { FiGlobe, FiLink2 } from 'react-icons/fi'
import { BsFileTextFill } from 'react-icons/bs'
import { BiError } from 'react-icons/bi'
import { FaGoogleDrive, FaSlack } from 'react-icons/fa'
import { RxNotionLogo } from 'react-icons/rx'

export default function Multiload(): JSX.Element {
    const [selectedDataSource, setSelectedDataSource] = useState('');

    // Toggle function
    const handleDataSourceSelect = useCallback((dataSource: string) => {
        setSelectedDataSource(dataSource);
    }, []);

    return (
        <>
            <div className='w-full md:w-[550px] flex flex-col justify-center'>
                <h1 className='text-3xl font-semibold text-center'>New <span className='text-[#7248d0] font-bold'>Multi</span>Upload Component
                </h1>
                <p className='text-center text-gray-600 pt-1'>Select a data source to start creating your upload component</p>

                <div className='w-full flex flex-col gap-3 min-h-56 rounded-md mt-8 bg-white dark:bg-[#13121D] px-4 py-6 shadow-md'>
                    {/* Conditional rendering based on selected data source */}
                    {selectedDataSource === 'fileUpload' ? <FileUpload /> : selectedDataSource === 'webLink' ? <WebsiteLink /> : selectedDataSource === 'youtubeLink' ? <YoutubeLink /> : selectedDataSource === 'driveLink' ? <DriveLink /> : selectedDataSource === 'githubLink' ? <GithubLink /> : <p>Select a data source to start uploading</p>}

                    <div className='flex min-h-16 bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md cursor-pointer py-2 px-4' onClick={() => handleDataSourceSelect('driveLink')}>
                        <Image src="/oauthicons.png" width="50" height="50" alt="oauthicons" />
                        <span className='flex-col ml-6'>
                            <h1 className='font-bold capitalize'>Bring them all in</h1>
                            <p className='text-xs md:text-sm'>Securely connect your favorite drive and bring it on.</p>
                        </span>
                    </div>

                    <div className='grid md:grid-cols-2 grid-flow-dense gap-2'>

                        <div className='flex h-10 group bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md cursor-pointer items-center px-4 gap-2 shadow-md' onClick={() => handleDataSourceSelect('fileUpload')}>
                            <MdOutlineUploadFile size={22} className='group-hover:scale-90' /><p>Upload Files</p>
                        </div>

                        <div className='flex h-10 group bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md cursor-pointer items-center px-4 gap-2 shadow-md' onClick={() => handleDataSourceSelect('webLink')}>
                            <FiLink2 size={22} className='group-hover:scale-90' /><p>Link Upload</p>
                        </div>

                        <div className='flex h-10 group bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md cursor-pointer relative items-center px-4 gap-2 shadow-md' onClick={() => handleDataSourceSelect('youtubeLink')}>
                            <AiFillYoutube size={22} className='group-hover:scale-90' /><p>Youtube Video</p>
                        </div>

                        <div className='flex relative h-10 group bg-gray-200 hover:bg-gray-100 dark:bg-[#1c1a2b] dark:hover:bg-[#1f1e2f] rounded-md cursor-pointer items-center px-4 gap-2 shadow-md' onClick={() => handleDataSourceSelect('githubLink')}>
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
                    </div>
                </div>
            </div>
        </>
    )
}

//write website linnkk logic here
function WebsiteLink() {
    return (
        <div className='flex flex-col transition-all'>
            <label htmlFor="repo-url" className="text-base font-medium">Enter your file link:</label>
            <div className='flex relative'>
                <input type="url" id="repo-url" name="repo-url" className="w-full mt-2 border rounded-lg py-2 px-3 text-base bg-gray-200 dark:bg-[#1c1a2b] dark:text-white focus:outline-none focus:ring-0 border-gray-700 focus:ring-gray-500 focus:ring-transparent" placeholder="example.com/?..." required />
                <button className='absolute right-2 text-white top-4 bg-violet-700 rounded-md px-2 py-1 text-[12px] font-medium'>Upload</button>
            </div>
            <div className=" mt-3 text-sm text-gray-500">Paste the link to the file you wish to upload</div>
        </div>
    )
}

//write youtube link Logic here
function YoutubeLink() {
    return (
        <div className='flex flex-col transition-all'>
            <label htmlFor="repo-url" className="text-base font-medium">Enter public youtube URL:</label>
            <div className='flex relative'>
                <input type="url" id="repo-url" name="repo-url" className="w-full mt-2 border rounded-lg py-2 px-3 text-base bg-gray-200 dark:bg-[#1c1a2b] dark:text-white focus:outline-none focus:ring-0 border-gray-700 focus:ring-gray-500 focus:ring-transparent" placeholder="youtube.com/watch?v=..." required />
                <button className='absolute right-2 text-white top-4 bg-violet-700 rounded-md px-2 py-1 text-[12px] font-medium'>Upload</button>
            </div>
            <div className=" mt-3 text-sm text-gray-500">Paste the link to the file you wish to upload</div>
        </div>
    )
}

//write file upload logic here
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


    //File list section. Dragging mutilpe files
    function fileAcceptance() {
        return acceptedFiles.map((file, index) => (
            <div key={index}>
                {showProgress ? <div className='flex w-full p-2 mt-2 border-2 border-gray-200 rounded-lg'>
                    <BsFileTextFill className='p-1 text-gray-400 border border-gray-200 rounded-md' size={28} />
                    <div className='flex flex-col w-full gap-1 ml-4'>
                        <p className='text-[12px] text-bold text-gray-600'>
                            {/* convert file size to MB with exception to small Byte files */}
                            {file.name} ({file.size < 1024 ? file.size : (file.size / 1024000).toFixed(1)} {file.size < 1024 ? "B" : "MB"})</p>
                        <div className='flex justify-between w-full'>
                            <div className="w-[92%] h-2 bg-gray-200 rounded-full">
                                <div className="relative w-0 h-2 transition-all duration-1000 ease-out rounded-full bg-violet-600" style={{ width: `${loadPercentage}%` }} />
                            </div>
                            <div className='w-[5%] -mt-1 mr-1'>
                                <p className='text-[10px] text-gray-500'>{loadPercentage}%</p>
                            </div>
                        </div>
                    </div>
                </div> : null
                }
            </div>
        ));
    };
    //handle error/rejection
    function fileRejection() {
        return fileRejections.map(({ file, errors }, index) => (
            <div key={index}>
                {showProgress ? <div className='flex w-full p-2 mt-2 border-2 border-gray-200 rounded-lg'>
                    <BiError className='p-1 text-red-400 border border-gray-200 rounded-md' size={28} />
                    <div className='flex flex-col w-full gap-1 ml-4'>
                        {errors.map(e => (
                            <p key={e.code} className='text-[12px] text-bold text-red-500'>
                                {file.name} ~ {e.message} </p>
                        ))}
                        <div className='flex justify-between w-full'>
                            <div className="w-[92%] h-2 bg-gray-200 rounded-full">
                                <div className="relative w-0 h-2 transition-all duration-1000 ease-out rounded-full bg-red-500" style={{ width: `${loadPercentage}%` }} />
                            </div>
                            <div className='w-[5%] -mt-1 mr-1'>
                                <p className='text-[10px] text-gray-500'>{0}%</p>
                            </div>
                        </div>
                    </div>
                </div> : null
                }
            </div>
        ));
    }
    return (
        <>
            <div className={`p-8 mt-5 border-2 border-dashed rounded-lg ${isDragAccept ? 'border-violet-600 bg-violet-50 dark:bg-violet-950' : isDragReject ? 'border-red-500 bg-red-50' : ''}`} {...getRootProps()}>
                <div className='flex mx-auto justify-center mb-6 bg-violet-200 rounded-full w-[70px] h-[70px]'>
                    <Image style={{ objectFit: "contain" }} src="/cloud-upload.png" height="60" width="60" alt="upload" />
                </div>
                <input {...getInputProps()} />
                <p className='text-xs font-medium text-center text-gray-600'>{isDragAccept ? "Drop file(s) here" : isDragReject ? "File type not allowed" : fileSize > maxFileSize ? isDragReject : "Drag file(s) here"}</p>
                <p className='text-center text-[10px] text-gray-400'>
                    or, click to browse (4 MB max)
                </p>

            </div>
            {fileAcceptance()}
            {fileRejection()}

            <div className='flex justify-end'>
                <button className='text-white bg-violet-800 text-xs font-medium py-1 px-2 rounded-md float-right'>Upload</button>
            </div>
        </>
    )
}

//write drive link logic here
function DriveLink() {
    return (
        <>
            <div className='w-full flex overflow-auto justify-start gap-5'>
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

//write github logic here
function GithubLink() {
    return (
        <div className='flex flex-col transition-all'>
            <label htmlFor="repo-url" className="text-base font-medium">Enter your public GitHub URL:</label>
            <div className='flex relative'>
                <input type="url" id="repo-url" name="repo-url" className="w-full mt-2 border rounded-lg py-2 px-3 text-base bg-gray-200 dark:bg-[#1c1a2b] dark:text-white focus:outline-none focus:ring-0 border-gray-700 focus:ring-gray-500 focus:ring-transparent" placeholder="github.com/username/repo" required />
                <button className='absolute right-2 text-white top-4 bg-violet-700 rounded-md px-2 py-1 text-[12px] font-medium'>Upload</button>
            </div>
            <div className=" mt-3 text-sm text-gray-500">By default we collect all of the files from the repo</div>
            <div className="flex items-center justify-between mt-1">
                <label htmlFor="repo-url" className="text-sm font-medium">Branch</label>
                <input type="url" id="repo-branch" name="repo-branch" className="mx-2 border rounded-lg py-2 px-2 text-sm bg-gray-200 dark:bg-[#1c1a2b] focus:outline-none focus:ring-0 border-gray-700 focus:ring-gray-500 focus:ring-transparent" placeholder="main" required />
            </div>
            <div className="mt-1 flex items-center justify-between">
                <label htmlFor="repo-url" className="text-sm font-medium">Folder Path</label>
                <input type="url" id="repo-branch" name="repo-branch" className="mx-2 border rounded-lg py-2 px-2 text-sm bg-gray-200 dark:bg-[#1c1a2b] focus:outline-none focus:ring-0 border-gray-700 focus:ring-gray-500 focus:ring-transparent" placeholder="docs/v2" required />
            </div>
            <div className="mt-1 flex items-center justify-between"><label htmlFor="include-code-files" className="text-sm font-medium">Include only doc files (.md/.mdx/.rst)</label><select id="include-code-files" name="include-code-files" className="mx-2 border rounded-lg py-2 px-2 text-sm bg-gray-200 dark:bg-[#1c1a2b] focus:outline-none focus:ring-0 border-gray-700 focus:ring-gray-500 focus:ring-transparent"><option value="true">No</option><option value="false">Yes</option></select></div>
        </div>
    )
}
