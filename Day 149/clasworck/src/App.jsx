useEffect(() => {
  gsap.to(".text-hide",{
    duration:1.5,
    x:"50vw",
    xPercent:-50,
    y:"50vh",
    yPercent:-50,
    rotate:360,
    duration:2,
    opacity:1,
    yoyo:true,
    repeat:-1
  })
},[])
return (
  <div>

    <div className='text-hide bg-blue-60 opacity-0 size-50'>
      
    </div>
  </div>
)
