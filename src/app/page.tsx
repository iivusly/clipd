'use client'

import { App, Space, Typography } from 'antd'

export default function Home() {
    return (
        <App>
            <Space
                align={'center'}
                direction={'vertical'}
                style={{
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Typography.Title>Clipd</Typography.Title>
                <Typography.Title level={3}>
                    Clip/Image hosting service
                </Typography.Title>
                <Typography.Text>
                    <i>Coming soon...</i>
                </Typography.Text>
            </Space>
        </App>
    )
}
