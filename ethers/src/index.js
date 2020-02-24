import ULIFrameProvider from '@unilogin/provider'
import { providers, utils } from 'ethers'

const provider = new providers.Web3Provider(ULIFrameProvider.createPicker(window.ethereum))
const signer = provider.getSigner()

window.provider = provider
window.signer = signer
window.utils = utils
