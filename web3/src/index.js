import ULIFrameProvider from '@unilogin/provider'
import Web3 from 'web3'

const web3 = new Web3(ULIFrameProvider.createPicker(window.ethereum))

window.web3 = web3
