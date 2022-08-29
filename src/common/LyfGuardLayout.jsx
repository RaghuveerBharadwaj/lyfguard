import {
  AlertOutlined,
  ApartmentOutlined,
  AppstoreOutlined,
  CarOutlined,
  FireOutlined,
  FlagOutlined,
  HeartOutlined,
  PlusOutlined,
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu } from 'antd'
import React from 'react'
import 'antd/dist/antd.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AgencyForm, AmbulanceForm, BloodBankForm, BranchForm, CountryForm, DriverForm, FireForm, HospitalForm, PoliceForm, UserForm } from '../pages/Form'
import { AgencyTable, AmbulanceTable, BloodBankTable, BranchTable, CountryTable, DriverTable, FireTable, HospitalTable, PoliceTable, UserTable } from '../pages/Table'
import { Login } from '../pages/Login';

const { Content, Sider } = Layout;

const items = [
  {
    key: 0,
    link: '/dashboard',
    icon: <AppstoreOutlined />,
    component: <></>,
    label: 'Dashboard',
  },
  {
    key: 1,
    link: '/hospitals',
    icon: <PlusOutlined />,
    component: <HospitalTable />,
    label: 'Hospitals',
  },
  {
    key: 2,
    link: '/branches',
    icon: <ApartmentOutlined />,
    component: <BranchTable />,
    label: 'Branches',
  },
  {
    key: 3,
    link: '/drivers',
    icon: <SolutionOutlined />,
    component: <DriverTable />,
    label: 'Drivers',
  },
  {
    key: 4,
    link: '/users',
    icon: <UserOutlined />,
    component: <UserTable />,
    label: 'Users',
  },
  {
    key: 5,
    link: '/ambulances',
    icon: <AlertOutlined />,
    component: <AmbulanceTable />,
    label: 'Ambulances',
  },
  {
    key: 6,
    link: '/agencies',
    icon: <TeamOutlined />,
    component: <AgencyTable />,
    label: 'Agencies',
  },
  {
    key: 7,
    link: '/countries',
    icon: <FlagOutlined />,
    component: <CountryTable />,
    label: 'Countries',
  },
  {
    key: 8,
    link: '/fire',
    icon: <FireOutlined />,
    component: <FireTable />,
    label: 'Fire Departments',
  },
  {
    key: 9,
    link: '/police',
    icon: <CarOutlined />,
    component: <PoliceTable />,
    label: 'Police Departments',
  },
  {
    key: 10,
    link: '/blood_banks',
    icon: <HeartOutlined />,
    component: <BloodBankTable />,
    label: 'Blood Banks',
  },
]

const formItems = [
  {
    link: '/agencies/create',
    component: <AgencyForm />,
  },
  {
    link: '/agencies/edit/:id',
    component: <AgencyForm />,
  },
  {
    link: '/countries/create',
    component: <CountryForm />,
  },
  {
    link: '/countries/edit/:id',
    component: <CountryForm />,
  },
  {
    link: '/blood_banks/create',
    component: <BloodBankForm />,
  },
  {
    link: '/blood_banks/edit/:id',
    component: <BloodBankForm />,
  },
  {
    link: '/hospitals/create',
    component: <HospitalForm />,
  },
  {
    link: '/hospitals/edit/:id',
    component: <HospitalForm />,
  },
  {
    link: '/branches/create',
    component: <BranchForm />,
  },
  {
    link: '/branches/edit/:id',
    component: <BranchForm />,
  },
  {
    link: '/ambulances/create',
    component: <AmbulanceForm />,
  },
  {
    link: '/ambulances/edit/:id',
    component: <AmbulanceForm />,
  },
  {
    link: '/users/create',
    component: <UserForm />,
  },
  {
    link: '/users/edit/:id',
    component: <UserForm />,
  },
  {
    link: '/drivers/create',
    component: <DriverForm />,
  },
  {
    link: '/drivers/edit/:id',
    component: <DriverForm />,
  },
  {
    link: '/fire/create',
    component: <FireForm />,
  },
  {
    link: '/fire/edit/:id',
    component: <FireForm />,
  },
  {
    link: '/police/create',
    component: <PoliceForm />,
  },
  {
    link: '/police/edit/:id',
    component: <PoliceForm />,
  },
]

export const LyfGuardLayout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const logout = () => {
    localStorage.clear()
    navigate("/login")
  }

  const selectedKey = items?.filter(item => pathname?.includes(item?.link))?.[0]?.key

  return (
    <>
      {localStorage?.getItem("token")
        ? <Layout>
          <Sider>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={[selectedKey?.toString()]}
              items={items}
              onClick={({ key }) => navigate(items?.[key]?.link)}
            />
            <Button style={{margin: '24px auto', display: 'block'}} onClick={logout}>
              Logout
            </Button>
          </Sider>
          <Layout>
            <Content>
              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  minHeight: '100%',
                }}
              >
                <Routes>
                  {items?.map(item => <Route path={item?.link} exact element={item?.component} />)}
                  {formItems?.map(item => <Route path={item?.link} exact element={item?.component} />)}
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
        : <Login />}
    </>
  )
};
