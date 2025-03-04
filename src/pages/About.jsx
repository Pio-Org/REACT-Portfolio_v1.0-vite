import React from 'react';
// import project1 from "../assets/images/proj1.jpg";
// import project2 from "../assets/images/proj2.jpg";


export const About = () => {
    return(
        <section id='about' className='text-white p-8'>
            <h2 className='text-6xl font-bold mb-8'>
                About <span className='text-emerald-300'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>01. Background</h3>
                    <p className='text-white/50 mb-6'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quisquam, iure veritatis enim sint, esse iusto officiis sit quos cupiditate facilis debitis, accusamus omnis? Laudantium blanditiis, tempore quos quo in nisi dolore fugit dolorem veritatis eaque quae porro optio nostrum harum similique magnam voluptatibus ab.
                    </p>

                    <div className='rounded-lg p-4 mb-4 border border-white/20'>
                        <code className='text-emerald-200/50'>
                            const skills = [<br/>
                            &nbsp;&nbsp;'Javascript',
                            <br/>
                            &nbsp;&nbsp;'React',
                            <br/>
                            &nbsp;&nbsp;'Node.js',
                            <br/>
                            &nbsp;&nbsp;'Python',
                            <br/>
                            &nbsp;&nbsp;'SQL',
                            <br/>
                            &nbsp;&nbsp;'AWS',
                            <br/>
                            ];
                        </code>
                    </div>
                </div>

                    <div className='border border-white/20 rounded-lg p-6'>
                        <h3 className='text-2xl font-bold mb-2'>02. Expertise</h3>
                        <p className='text-white/50'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe inventore cumque repellat, eligendi ab laudantium quaerat quisquam, quam vitae autem quibusdam corporis officia deleniti voluptatum porro repellendus provident nulla ipsum veniam sint soluta sapiente!
                        </p>
                        <div className='mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden'>
                            <img
                            src={"https://placehold.co/600x400"}
                            alt='Project 1'
                            className='absolute inset-0 w-full h-full object-cover'
                            />
                        </div>
                    </div>
                        
                    <div className='border border-white/20 rounded-lg p-6'>
                        <h3 className='text-2xl font-bold mb-2'>03. Skills</h3>
                        <p className='text-white/50 mb-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quisquam inventore eaque itaque in autem voluptatibus laborum voluptates cupiditate consectetur nisi voluptatum placeat recusandae earum ipsa consequuntur odio ducimus a cumque, veniam molestiae omnis eum!
                        </p>
                        <div className='grid grid-cols-1 text-center gap-4'>
                            <div className='border border-white/20 rounded-lg p-3'>
                                <h4 className='text-emerald-300 font-medium mb-2'>Frontend</h4>
                                <ul className='text-white/50 space-y-1 text-sm'>
                                    <li>React/Nextjs</li>
                                    <li>Javascript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Framer Motion</li>
                                </ul>
                            </div>
                            <div className='border border-white/20 rounded-lg p-3'>
                                <h4 className='text-emerald-300 font-medium mb-2'>Backend</h4>
                                <ul className='text-white/50 space-y-1 text-sm'>
                                    <li>Node.js</li>
                                    <li>XAMP</li>
                                    <li>MySql</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                <div className='border border-white/20 rounded-lg p-6'>
                    <div className='space-y-4'>
                        <div>
                            <label className='block text-sm font-medium mb-1'>
                                Front-End
                            </label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div 
                                className='bg-emerald-300 h-2 rounded-full'
                                style={{ width: "90%"}}>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>
                                Back-End
                            </label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div 
                                className='bg-emerald-300 h-2 rounded-full'
                                style={{ width: "85%"}}>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>
                                Dev-Ops
                            </label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div 
                                className='bg-emerald-300 h-2 rounded-full'
                                style={{ width: "75%"}}>
                                </div>
                            </div>
                        </div>    
                    </div>

                    <h3 className='text-2xl font-bold mt-4 mb-2'>04. Approach</h3>
                    <p className='text-white/50'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit officia deleniti laborum doloribus quae facilis recusandae quidem officiis nulla totam iure sed nemo odit consectetur nisi est unde, quia eaque ut placeat quaerat. Molestias, illo?
                    </p>
                </div>

                <div className='border border-white/20 rounded-lg p-6 flex flex-col justify-between'>
                    <div className='relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden'>
                        <img
                            src={"https://placehold.co/600x400"}
                            alt='Project 2'
                            className='absolute inset-0 w-full h-full object-cover'
                        />
                    </div>

                    <div>
                        <h3 className='text-2xl font-bold mt-4 mb-2'>05. Goals</h3>
                        <p className='text-white/50'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit officia deleniti laborum doloribus quae facilis recusandae quidem officiis nulla totam iure sed nemo odit consectetur nisi est unde, quia eaque ut placeat quaerat. Molestias, illo?
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};