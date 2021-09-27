import React, { useEffect, useReducer, useRef, useState } from "react"

const middleContainerStyle = {
    position : 'relative',
    width : '100%',
    padding: 0,
    margin : 0
}

function throttle(functor, delay) {
    //чтобы не загружать лодаш ради одной функции
    let lastCall = 0;
    let args = null;
    let context = null;
    let timeout = null;
  
    return function () {
      const now = +new Date();
      if (now >= lastCall + delay) {
        lastCall = now;
        functor.apply(this, arguments);
      } else {
        lastCall = now;
        args = arguments;
        context = this;
  
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null;
            functor.apply(context, args);
          }, delay);
        }
      }
    };
  }
  



function CustomAccordionPair({header, content, opened, setOpened}){
    const contentRef = useRef()

    const calcMaxHeight = () => !opened? 0 : contentRef && contentRef.current ? contentRef.current.scrollHeight : 1000

    const [maxHeight, updateMaxHeight] = useReducer(calcMaxHeight, calcMaxHeight())

    useEffect(() => {
        const resizeHandler = throttle(updateMaxHeight, 200)
        window.addEventListener('resize', resizeHandler)
        return () => window.removeEventListener('resize', resizeHandler)
    }, [])

    useEffect(() => {
        updateMaxHeight()
    }, [opened])


    return <React.Fragment>
        <div
            key="header" 
            onClick={() => setOpened(!opened)} style={{...middleContainerStyle}}>
            {header}
        </div>
        <div 
            key="content"
            style={{...middleContainerStyle,
                     overflowX: 'auto', 
                     overflowY :'hidden',
                     maxHeight : maxHeight,
                     transition: `max-height .3s linear`
                     }}>
            <div ref={contentRef} style={{...middleContainerStyle}}>{content}</div>
        </div>
    </React.Fragment>
}

export default function CustomAccordion({children, opendedInitial=[], multiopen=false, style={}})
{
    const [opened, setOpened] = useReducer((acc, {id, value}) => ({...(multiopen? acc : {}), [id] : value}), Object.entries(opendedInitial.map(key => [key, true])))


    

    return <div style={{position: 'relative', 'width':'100%', ...style}}>
        {
            children && new Array(children.length / 2).fill(null).map((_, index) => {
                return <CustomAccordionPair 
                            key={index} 
                            header={children[index * 2]} 
                            content={children[index * 2 + 1]}
                            opened={opened[index]}
                            setOpened={(value) => setOpened({id: index, value})}
                            />
            })
        }
    </div>
}