export type PackageInstallerType = {
    code: string,
    label: string,
    chocolatey: string
}
export const PackageNames: PackageInstallerType[] =
    [
        {
            code: 'CCLEANER', label: 'CCleaner', chocolatey: 'ccleaner'
        },
        {
            code: 'WINRAR', label: 'Winrar', chocolatey: 'winrar'
        },
        {
            code: 'VLC', label: 'VLC', chocolatey: 'vlc'
        },
        {
            code: 'KLITE', label: 'K-Lite', chocolatey: 'k-litecodecpackfull'
        },
        {
            code: 'MOZILLA', label: 'Mozilla Firefox', chocolatey: 'firefox'
        },
        {
            code: 'CHROME', label: 'Google Chrome', chocolatey: 'google-chrome-x64'
        },
        {
            code: 'OFFICE', label: 'Libre Office', chocolatey: 'libreoffice-still'
        },
        {
            code: 'ACROBATREADER', label: 'Acrobat Reader', chocolatey: 'adobereader'
        },
        {
            code: 'TEAMVIEWER', label: 'Team Viewer', chocolatey: 'teamviewer'
        }
    ]

