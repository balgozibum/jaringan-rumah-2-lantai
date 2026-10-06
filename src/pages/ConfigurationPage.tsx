import { BandRangeChart } from '@/components/diagram/BandRangeChart'
import { DocPage } from '@/components/docs/DocPage'
import { DocSection } from '@/components/docs/DocSection'
import { StepList } from '@/components/docs/StepList'
import { SubHeading } from '@/components/docs/SubHeading'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { DataTable, type Column } from '@/components/ui/DataTable'
import {
  apModeSteps,
  bandComparison,
  channelNotes,
  channelPlan,
  dhcpConflictChecks,
  dhcpTable,
  doubleNatSigns,
  natComparison,
  passwordRules,
  reservedIps,
  ssidDecision,
  ssidPlan,
  type BandComparisonRow,
  type ChannelPlanRow,
  type NatComparisonRow,
  type ReservedIpRow,
  type SettingRow,
  type SsidDecisionRow,
  type SsidPlan,
} from '@/data/configuration'
import { networkDevices, ontModels, subnet, type NetworkDevice, type OntModel } from '@/data/network-plan'

const deviceColumns: Column<NetworkDevice>[] = [
  { key: 'name', header: 'Perangkat', render: (row) => <span className="font-medium text-fg">{row.name}</span> },
  { key: 'floor', header: 'Lantai', render: (row) => row.floor, align: 'center' },
  { key: 'ip', header: 'Alamat IP', render: (row) => <code className="font-mono text-fg">{row.ip}</code> },
  { key: 'role', header: 'Peran', render: (row) => row.role },
  { key: 'note', header: 'Catatan', render: (row) => <span className="text-fg-muted">{row.ipNote}</span> },
]

const ontColumns: Column<OntModel>[] = [
  { key: 'model', header: 'Model', render: (row) => <span className="font-medium text-fg">{row.vendor} {row.model}</span> },
  { key: 'lan', header: 'Port LAN', render: (row) => row.lan },
  { key: 'wifi', header: 'Wi-Fi', render: (row) => row.wifi },
  { key: 'gateway', header: 'Gateway', render: (row) => <code className="font-mono">{row.gateway}</code> },
  { key: 'note', header: 'Catatan', render: (row) => <span className="text-fg-muted">{row.note ?? '—'}</span> },
]

const dhcpColumns: Column<SettingRow>[] = [
  { key: 'setting', header: 'Pengaturan', render: (row) => <span className="font-medium text-fg">{row.setting}</span> },
  { key: 'ont', header: 'Modem IndiHome', render: (row) => row.ont },
  { key: 'ap', header: 'Access Point', render: (row) => row.ap },
  { key: 'reason', header: 'Alasan', render: (row) => <span className="text-fg-muted">{row.reason}</span> },
]

const reservedColumns: Column<ReservedIpRow>[] = [
  { key: 'device', header: 'Perangkat', render: (row) => row.device },
  { key: 'ip', header: 'IP', render: (row) => <code className="font-mono">{row.ip}</code> },
  { key: 'reason', header: 'Alasan', render: (row) => <span className="text-fg-muted">{row.reason}</span> },
]

const ssidColumns: Column<SsidPlan>[] = [
  { key: 'band', header: 'Pemancar · band', render: (row) => <span className="font-medium text-fg">{row.band}</span> },
  { key: 'ssid', header: 'SSID', render: (row) => <code className="font-mono">{row.ssid}</code> },
  { key: 'security', header: 'Keamanan', render: (row) => row.security },
  { key: 'note', header: 'Catatan', render: (row) => <span className="text-fg-muted">{row.note}</span> },
]

const bandColumns: Column<BandComparisonRow>[] = [
  { key: 'aspect', header: 'Aspek', render: (row) => <span className="font-medium text-fg">{row.aspect}</span> },
  { key: 'b24', header: '2,4 GHz', render: (row) => row.band24 },
  { key: 'b5', header: '5 GHz', render: (row) => row.band5 },
]

const channelColumns: Column<ChannelPlanRow>[] = [
  { key: 'device', header: 'Perangkat', render: (row) => <span className="font-medium text-fg">{row.device}</span> },
  { key: 'b24', header: '2,4 GHz', render: (row) => row.band24 },
  { key: 'b5', header: '5 GHz', render: (row) => row.band5 },
]

const ssidDecisionColumns: Column<SsidDecisionRow>[] = [
  { key: 'criterion', header: 'Pertimbangan', render: (row) => <span className="font-medium text-fg">{row.criterion}</span> },
  { key: 'same', header: 'SSID sama', render: (row) => row.same },
  { key: 'different', header: 'SSID berbeda', render: (row) => row.different },
]

const natColumns: Column<NatComparisonRow>[] = [
  { key: 'aspect', header: 'Aspek', render: (row) => <span className="font-medium text-fg">{row.aspect}</span> },
  { key: 'ap', header: 'Mode AP (disarankan)', render: (row) => row.apMode },
  { key: 'router', header: 'Mode Router (double NAT)', render: (row) => <span className="text-fg-muted">{row.routerMode}</span> },
]

export function ConfigurationPage() {
  return (
    <DocPage
      title="Konfigurasi"
      lead="Mengubah router menjadi access point, menata alamat IP dan DHCP, lalu menyelaraskan SSID dan channel agar dua lantai terasa seperti satu jaringan."
    >
      <DocSection id="rencana-ip" title="Rencana alamat IP">
        <p>Modem IndiHome tetap memakai pengaturan pabrik. Satu-satunya alamat yang ditentukan secara manual adalah alamat access point, dipilih di luar rentang DHCP.</p>
        <CodeBlock
          label="rencana subnet"
          code={`Subnet   : ${subnet.cidr}  (mask ${subnet.mask})\nGateway  : ${subnet.gateway}  (modem IndiHome)\nDHCP pool: ${subnet.dhcpStart} – ${subnet.dhcpEnd}\nDNS      : ${subnet.dns}`}
        />
        <DataTable caption="Pembagian alamat per perangkat." columns={deviceColumns} rows={networkDevices} rowKey={(row) => row.id} />
        <SubHeading>Kenali modem IndiHome Anda</SubHeading>
        <p>Alamat gateway dan kemampuan port berbeda per model. Cek stiker di bawah modem.</p>
        <DataTable caption="Model modem IndiHome yang umum dan karakteristiknya." columns={ontColumns} rows={ontModels} rowKey={(row) => row.model} />
        <Callout tone="warning" title="Modem Huawei memakai 192.168.100.1">
          <p>Jika modem Anda Huawei HG8245H/H5 atau HG8145V5, ganti semua contoh <code>192.168.1.x</code> di halaman ini menjadi <code>192.168.100.x</code>. Rentang DHCP bawaannya juga perlu dilihat di menu LAN modem.</p>
        </Callout>
      </DocSection>

      <DocSection id="mode-access-point" title="Mengaktifkan mode Access Point">
        <p>Urutan ini berlaku untuk hampir semua router konsumen. Konfigurasi Wi-Fi dilakukan lebih dulu karena beberapa merek menyembunyikan sebagian menu setelah mode AP aktif.</p>
        <StepList steps={apModeSteps} label="Langkah mengaktifkan mode Access Point" />
        <Callout tone="info" title="Access point plafon (Omada EAP, UniFi)">
          <p>Perangkat ini sudah AP sejak awal, tidak ada mode yang perlu diubah. Konfigurasi dilakukan lewat mode standalone di web/app, atau lewat controller jika ingin fitur mesh dan roaming.</p>
        </Callout>
      </DocSection>

      <DocSection id="dhcp" title="DHCP">
        <p>Hanya modem yang membagikan alamat IP. Di mode AP, server DHCP pada access point otomatis mati; tabel ini merangkum siapa mengerjakan apa.</p>
        <DataTable caption="Pembagian peran DHCP antara modem dan access point." columns={dhcpColumns} rows={dhcpTable} rowKey={(row) => row.setting} />
        <SubHeading>Alamat yang direservasi</SubHeading>
        <p>Rentang 192.168.1.2–99 sengaja dikosongkan dari pool untuk perangkat yang butuh alamat tetap. Reservasi dilakukan lewat IP statis di perangkat, atau lewat DHCP binding di modem jika akun Anda mengizinkan (ZTE: Local Network → LAN → DHCP Binding; Huawei: LAN → DHCP Static IP Configuration).</p>
        <DataTable caption="Contoh alamat yang direservasi." columns={reservedColumns} rows={reservedIps} rowKey={(row) => row.device} hideCaption />
      </DocSection>

      <DocSection id="ssid-password" title="SSID & password">
        <p>Rencana default: nama dan password yang sama di kedua lantai agar perangkat berpindah otomatis. Alasan dan pengecualiannya dibahas di bagian <a href="#ssid-sama-atau-beda">SSID sama atau berbeda</a>.</p>
        <DataTable caption="Rencana SSID untuk kedua pemancar." columns={ssidColumns} rows={ssidPlan} rowKey={(row) => row.band} />
        <SubHeading>Aturan password</SubHeading>
        <ul>
          {passwordRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </DocSection>

      <DocSection id="band" title="2,4 GHz vs 5 GHz">
        <p>Dua band ini saling melengkapi. Access point memancarkan keduanya; yang perlu diputuskan hanyalah perangkat mana diarahkan ke mana.</p>
        <BandRangeChart />
        <DataTable caption="Perbandingan praktis 2,4 GHz dan 5 GHz." columns={bandColumns} rows={bandComparison} rowKey={(row) => row.aspect} />
        <Callout tone="tip">
          <p>Dengan access point di lantai yang sama, laptop kerja dan Smart TV hampir selalu lebih baik di 5 GHz. Biarkan 2,4 GHz untuk perangkat IoT dan sudut rumah yang jauh.</p>
        </Callout>
      </DocSection>

      <DocSection id="channel" title="Channel Wi-Fi">
        <p>Modem lantai 1 dan access point lantai 2 saling menjangkau, sehingga keduanya harus memakai channel berbeda. Contoh pembagian:</p>
        <DataTable caption="Pembagian channel antar lantai." columns={channelColumns} rows={channelPlan} rowKey={(row) => row.device} />
        <ul>
          {channelNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <p>Channel modem diubah di menu WLAN modem (ZTE F670L: Local Network → WLAN; Huawei: WLAN → WLAN Advanced Configuration). Jika akun user tidak bisa mengubahnya, biarkan modem di Auto dan pilih channel AP yang berbeda dari channel yang sedang dipakai modem.</p>
      </DocSection>

      <DocSection id="ssid-sama-atau-beda" title="SSID sama atau berbeda?">
        <p>Untuk rumah ini, <strong>SSID yang sama</strong> adalah pilihan default. Tanpa sistem mesh, roaming sepenuhnya diputuskan perangkat klien, tetapi HP dan laptop modern berpindah dengan cukup baik saat sinyal lama melemah.</p>
        <DataTable caption="Pertimbangan SSID sama versus berbeda." columns={ssidDecisionColumns} rows={ssidDecision} rowKey={(row) => row.criterion} />
        <p>Kompromi yang sering dipakai: SSID utama sama di kedua lantai, ditambah satu SSID 5 GHz khusus di lantai 2 (misalnya <code>Rumah-Kerja</code>) untuk laptop kerja yang tidak boleh berpindah ke modem lantai 1.</p>
      </DocSection>

      <DocSection id="double-nat" title="Menghindari double NAT">
        <p>Double NAT terjadi jika router lantai 2 dibiarkan di mode Router: modem melakukan NAT, lalu router melakukan NAT lagi dengan subnet sendiri. Hasilnya dua jaringan yang tidak saling melihat dan masalah pada game online, VPN, serta cast.</p>
        <DataTable caption="Dampak mode AP dibanding mode Router pada perangkat lantai 2." columns={natColumns} rows={natComparison} rowKey={(row) => row.aspect} />
        <SubHeading>Tanda-tanda double NAT</SubHeading>
        <ul>
          {doubleNatSigns.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ul>
        <Callout tone="info" title="Mode bridge modem tidak diperlukan">
          <p>Alternatif lain adalah menjadikan modem bridge dan membiarkan router lantai 2 melakukan PPPoE. Ini membutuhkan akun superadmin modem yang jarang diberikan Telkom, dan menghilangkan Wi-Fi modem di lantai 1. Mode AP menyelesaikan masalah yang sama tanpa menyentuh modem.</p>
        </Callout>
      </DocSection>

      <DocSection id="konflik-dhcp" title="Menghindari konflik DHCP">
        <p>Konflik DHCP muncul saat dua server DHCP membagikan alamat di segmen yang sama atau saat alamat statis bertabrakan dengan pool. Gejalanya: sebagian perangkat bisa internet, sebagian tidak, secara acak.</p>
        <ul>
          {dhcpConflictChecks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ul>
      </DocSection>
    </DocPage>
  )
}
