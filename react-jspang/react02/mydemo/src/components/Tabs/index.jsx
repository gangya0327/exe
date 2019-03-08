import React from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import Demo from '../ListView'

const tabs = [
    { title: <Badge text={'3'}>First Tab</Badge> },
    { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
    { title: <Badge dot>Third Tab</Badge> },
]

const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
]
const renderDemo = () => {
    return (
        <Demo data={data} />
    )
}

const TabExample = () => (
    <div>
        <Tabs tabs={tabs}
            initialPage={1}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
            {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                Content of first tab
                {this.renderDemo.bind(this)}
            </div> */}
            <Demo data={data}/>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of second tab
                {/* <Demo /> */}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of third tab
                {/* <Demo /> */}
            </div>
        </Tabs>
        <WhiteSpace />
        {/* <Tabs tabs={tabs2}
            initialPage={1}
            tabBarPosition="bottom"
            renderTab={tab => <span>{tab.title}</span>}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of first tab
      </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of second tab
      </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of third tab
      </div>
        </Tabs> */}
        <WhiteSpace />
    </div>
);

export default TabExample
// ReactDOM.render(<TabExample />, mountNode);