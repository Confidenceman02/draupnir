import React from 'react'
import { UnmountClosed as Collapse } from 'react-collapse'
import StatusPage from './pages/StatusPage'
import InfoPage from './pages/InfoPage'
import LogsPage from './pages/LogsPage'
import NotesPage from './pages/NotesPage'
import OrderPage from './pages/OrderPage'
import QuotePage from './pages/QuotePage'

export default function ClientExpand({

  expanded, clientPage, changeRoute, orders, clientId, status, settings,
  client, showModal, closeModal, showClientImageModal, closeImageModal,
  uploadPhoto, imageData, tempOrder, onOrder, onOrderId, orderUserId

}) {
  return (
      <div>
        <Collapse isOpened={ expanded } fixedHeight={350}>
        <div>
          <nav>
            <a onClick={ () => changeRoute('status')}>STATUS</a>
            <a onClick={ () => changeRoute('info') }>INFO</a>
            <a onClick={ () => changeRoute('notes') }>NOTES</a>
            <a onClick={ () => changeRoute('logs') }>LOGS</a>
            <a onClick={ () => changeRoute('order') }>ORDER</a>
            <a onClick={ () => changeRoute('quotes') }>QUOTES</a>
          </nav>
          {
            clientPage === 'status' ?
            <StatusPage status={ status }/>
            :
            clientPage === 'info' ?
            <InfoPage 
            client={ client }
            showModal={ showModal }
            closeModal={ closeModal }
            showClientImageModal={showClientImageModal}
            closeImageModal={closeImageModal}
            uploadPhoto={uploadPhoto}
            imageData ={ !!imageData ? imageData : "" } />
            :
            clientPage === 'notes' ?
            <h1>notes</h1>
            :
            clientPage === 'logs' ?
            <h1>logs</h1>
            :
            clientPage === 'order' ?
            <OrderPage
              settings={ settings }
              orders={ orders }
              tempOrder={ tempOrder }
              onOrder={ onOrder }
              client={ client }
              onOrderId={ onOrderId }
              orderUserId={ orderUserId }
            />
            :
            clientPage === 'quotes' ?
            <h1>quotes</h1>
            :
            ""
          }
        </div>
        </Collapse>
      </div>
  )
}
