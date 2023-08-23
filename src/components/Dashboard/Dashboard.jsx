'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import AdminTable from './AdminTable';
import styles from '../Dashboard/dashboard.module.css';
import Tab from './tab/Tab';
import TabContent from './tab/TabContent';
import TransactionTable from './TransactionTable';
import NoTabContent from './tab/NoTabContent';

function Admin() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/donators');

      const data = await response.json();

      setData(data.donators);
    };

    fetchData();
  }, []);

  console.log(data)

  return (
    <div className={styles.dashboard}>
      <Header />
      <div className="flex center gap-sm">
        <Tab
          id="tab1"
          title="Overview"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          id="tab2"
          title="Monetary"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          id="tab3"
          title="Fund raising"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          id="tab4"
          title="Children"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="tableDisplay">
        <TabContent id="tab1" activeTab={activeTab}>
          <TransactionTable data={data} />
        </TabContent>

        <TabContent id="tab2" activeTab={activeTab}>
          <TransactionTable />
        </TabContent>

        <TabContent id="tab3" activeTab={activeTab}>
          <NoTabContent />
        </TabContent>

        <TabContent id="tab4" activeTab={activeTab}>
          <AdminTable />
        </TabContent>
      </div>
    </div>
  );
}

export default Admin;
