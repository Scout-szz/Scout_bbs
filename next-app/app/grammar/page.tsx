'use client'

import React from 'react'
import Nav from 'components/Nav/Nav'
import FixedTip from 'components/PageComponent/FixedTip'
import TopContent from 'components/PageComponent/TopContent'
import Footer from 'components/PageComponent/Footer'

const Grammar: React.FC = () => {
  return (
    <>
      <Nav />
      <FixedTip />
      <TopContent />

      <div className={'bg-fillLight p-20'}>
        <p className={'text-[20px] my-5'}>多状态下控制元素及样式的推荐格式，避免在 TSX 中大量的 逻辑运算符 造成代码可读性下降</p>
        <iframe
          src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=monokai&wt=none&l=text%2Ftypescript-jsx&width=1134&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=import%2520React%252C%2520%257B%2520useState%2520%257D%2520from%2520%27react%27%250A%250Atype%2520caseType%2520%253D%2520%27normal%27%2520%257C%2520%27move%27%2520%257C%2520%27raise%27%2520%257C%2520%27down%27%250A%250Aconst%2520ReactComponent%253A%2520React.FC%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%255BcaseSource%252C%2520setCaseSource%255D%2520%253D%2520useState%253C%257B%2520cover%253A%2520string%253B%2520type%253A%2520caseType%2520%257D%255B%255D%253E%28%255B%255D%29%250A%2520%2520const%2520%255Bcontrol%252C%2520setControl%255D%2520%253D%2520useState%253Cboolean%253E%28false%29%250A%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253C%253E%250A%2520%2520%2520%2520%2520%2520%257BcaseSource.map%28%28item%252C%2520key%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520switch%2520%28item.type%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520case%2520%27normal%27%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520key%253D%257Bkey%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%27f-ull%27%257D%2520%252F%252F%2520%25E7%2594%25A8%2520Tailwind%2520%25E5%25BA%2594%25E7%2594%25A8%25E7%259A%2584%25E6%25A0%25B7%25E5%25BC%258F%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520...%257B%2520border%253A%2520control%2520%253F%2520%271px%2520dashed%2520black%27%2520%253A%2520%271px%2520solid%2520black%27%2520%257D%252C%2520%252F%252F%2520%25E7%2594%25A8%2520boolean%2520%25E5%2588%25A4%25E6%2596%25AD%25E9%259C%2580%25E8%25A6%2581%25E7%259A%2584%25E6%25A0%25B7%25E5%25BC%258F%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520...%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520switch%2520%28item.type%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520case%2520%27normal%27%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%257B%2520borderColor%253A%2520%27red%27%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%28%29%252C%2520%252F%252F%2520%25E7%2594%25A8%2520type%2520%25E5%25A4%259A%25E7%258A%25B6%25E6%2580%2581%25E5%2588%25A4%25E6%2596%25AD%25E7%259A%2584%25E6%25A0%25B7%25E5%25BC%258F%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520case%2520%27move%27%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%253Cdiv%2520key%253D%257Bkey%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520case%2520%27raise%27%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%253Cdiv%2520key%253D%257Bkey%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520case%2520%27down%27%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%253Cdiv%2520key%253D%257Bkey%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%257D%29%257D%250A%2520%2520%2520%2520%253C%252F%253E%250A%2520%2520%29%250A%257D%250A%250Aexport%2520default%2520ReactComponent%250A'
          className={'w-[1134px] h-[910px]'}
          sandbox='allow-scripts allow-same-origin'
        />
      </div>


      <Footer />
    </>
  )
}

export default Grammar
