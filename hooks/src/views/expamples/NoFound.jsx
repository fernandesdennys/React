import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const Home = props => (
    <div className="Home">
        <PageTitle error
            title="404 ERROR: PAGE NOT FOUND"
            subtitle="The post or page that your are looking for euther has just moved or doesn't exist in this server." />
    </div>
)

export default Home