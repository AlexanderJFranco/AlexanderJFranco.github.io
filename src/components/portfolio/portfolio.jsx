import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/stock.jpeg'
import IMG2 from '../../assets/TWITTER.png'
import IMG3 from '../../assets/discord_music.png'
import IMG4 from '../../assets/sudoku.png'
import IMG5 from '../../assets/inventory.png'
import IMG6 from '../../assets/mips.png'
import IMG7 from '../../assets/stock_rest_api.jpg'

const data = [
  {
    id:1,
    image: IMG7,
    title: 'Express Stock Report REST API',
    github:'https://github.com/AlexanderJFranco/Stock_Report'
  },
  {
    id:1,
    image: IMG1,
    title: 'Stock Notes',
    github:'https://github.com/AlexanderJFranco/StockParser'
  },
  
  {
    id:1,
    image: IMG2,
    title: 'Twitter Analyzer',
    github:'https://github.com/AlexanderJFranco/Twitter_Analyzer'
  },

  {
    id:1,
    image: IMG3,
    title: 'Discord Music Bot',
    github:'https://github.com/AlexanderJFranco/Music-Bot'
  },
  {
    id:1,
    image: IMG4,
    title: 'Bash Sudoku Solver',
    github:'https://github.com/AlexanderJFranco/Sudoku_Bash'
  },

  {
    id:1,
    image: IMG5,
    title: 'Client Services Manager',
    github:'https://github.com/AlexanderJFranco/InventoryTool'
  },

  {
    id:1,
    image: IMG6,
    title: 'MIPS Compiler In C',
    github:'https://github.com/AlexanderJFranco/Mips_Compiler'
  }
 
]

const Portfolio = () => {
  return (
    <section id = 'protfolio'>

    <h5>Some of My Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio_container'>
      {
        data.map(({id, image, title, github}) =>{
        return (

            
      <article key={id} className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={image} alt={title}/>
      </div>
      <h3> {title}</h3>
      <div className='portfolio_item-cta'>
        <a href={github} className='btn'>GitHub</a>
       {/* <a href={github} className='btn btn-primary' target='_blank'>Live Demo</a>*/}
      </div>
    
    </article> 
        
        )
      })
    }
    </div>

    </section>
  )
}

export default Portfolio