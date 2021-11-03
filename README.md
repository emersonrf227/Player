PARA RODAR NO ANDROID VIA USB NO MAC USAR AS SEGUINTES VARIAVEIS DE AMBIENTE

In my case with Android Studio 1.1.0 path was this

/Users/wzbozon/Library/Android/sdk/platform-tools

Add the following to ~/.bash_profile

export PATH=~/Library/Android/sdk/tools:$PATH
export PATH=~/Library/Android/sdk/platform-tools:$PATH


DEPOIS RODE O COMANDO adb devices

$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device



para instalar  nop seu celular

npx react-native run-android

PARA RODAR NO SEU IPHONE NÃO TEM MISTERIO ABRA O XCODE ESCOLHA UM TIME DE DEV E CLIQUE NO PLAY, TUDO ISSO POR QUE IPHONE É VIDA O TIO STEVE DEIXOU TUDO PRONTO PARA VOCÊ NÃO TER DOR DE CABEÇA

OBS: FICAMOS MAIS DE 3 HORAS PESQUISANDO COMO RODAR ESSA PORRA!!! NO ANDROID QUE FOI UMA TRETA DO CARALHO!!!!!
