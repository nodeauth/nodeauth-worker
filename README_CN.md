# 🛡️ 安全审计与透明度报告

[English](README.md) | 中文

![安全评级](https://img.shields.io/badge/安全评级-A+-success?style=for-the-badge)

> [!IMPORTANT]
> 本报告由 **GitHub Actions** 自动生成。为确保数据主权的绝对透明度，所有核心模块的安全扫描结果均实时公开。

| 📅 审计时间 | 📝 运行 ID | 🛠️ 环境 |
| :--- | :--- | :--- |
| `2026-04-27 19:05:02 UTC` | [#25013907037](https://github.com/nodeauth/nodeauth-worker-dev/actions/runs/25013907037) | `GitHub CI/CD` |

---

## 📉 实时安全仪表盘

| 工具 | 状态 | 发现项 |
| :--- | :--- | :--- |
| **Credential Leak (Gitleaks)** | ![Pass](https://img.shields.io/badge/Status-PASS-success?style=for-the-badge) | `0` 泄露 |
| **Dependency Scan (Snyk)** | ![Pass](https://img.shields.io/badge/Status-PASS-success?style=for-the-badge) | `0` 漏洞 |
| **Static Analysis (CodeQL)** | ![Pass](https://img.shields.io/badge/Status-PASS-success?style=for-the-badge) | `0` 告警 |
| **Container Scan (Trivy)** | ![Pass](https://img.shields.io/badge/Status-PASS-success?style=for-the-badge) | `0` 发现项 |

---

## 🔍 扫描覆盖范围

| 模块 | 已审计文件 | 覆盖率 |
| :--- | :---: | :---: |
| **GitHub Actions** | `4` | ✨ **100%** |
| **JavaScript (Frontend)** | `178` | ✨ **100%** |
| **TypeScript (Backend)** | `110` | ✨ **100%** |

---

## 🔍 详细发现项

### 🔑 凭据泄露检查 (Gitleaks)
`检测代码历史记录中硬编码的 API 密钥、密码或其他敏感令牌。` `扫描范围：所有代码更改和 Git 历史记录 (Gitleaks 全量扫描)`

✅ **安全**：未发现硬编码的敏感凭据。

### 🛡️ 容器配置安全 (Trivy)
`检测 Dockerfile 和容器配置中的安全风险与最佳实践。`

✅ **安全**：未发现容器配置缺陷。

### 📦 第三方依赖
✅ **安全**：在依赖项中未发现已知漏洞。

### 💻 代码质量与安全 (CodeQL)
✅ **安全**：CodeQL 扫描清洁，未检测到问题。

### 📂 已审计文件列表
<details>
<summary><b>GitHub Actions (4)</b></summary>

| 模块 | 位置 | 状态 |
| :--- | :--- | :--- |
| `deploy.yml` | `.github/workflows/deploy.yml` | ✅ **已审计** |
| `docker.yml` | `.github/workflows/docker.yml` | ✅ **已审计** |
| `edgeone.yml` | `.github/workflows/edgeone.yml` | ✅ **已审计** |
| `security.yml` | `.github/workflows/security.yml` | ✅ **已审计** |

</details>

<details>
<summary><b>JavaScript (178)</b></summary>

| 模块 | 位置 | 状态 |
| :--- | :--- | :--- |
| `analyze.js` | `.security/codeql/analyze.js` | ✅ **已审计** |
| `scan.js` | `.security/codeql/scan.js` | ✅ **已审计** |
| `scan.js` | `.security/gitleaks/scan.js` | ✅ **已审计** |
| `security.js` | `.security/security.js` | ✅ **已审计** |
| `scan.js` | `.security/snyk/scan.js` | ✅ **已审计** |
| `scan.js` | `.security/trivy/scan.js` | ✅ **已审计** |
| `build-docker.js` | `backend/scripts/build-docker.js` | ✅ **已审计** |
| `build-worker.js` | `backend/scripts/build-worker.js` | ✅ **已审计** |
| `playwright.config.js` | `frontend/playwright.config.js` | ✅ **已审计** |
| `router.js` | `frontend/src/app/router.js` | ✅ **已审计** |
| `appLockService.js` | `frontend/src/features/applock/service/appLockService.js` | ✅ **已审计** |
| `appLockStore.js` | `frontend/src/features/applock/store/appLockStore.js` | ✅ **已审计** |
| `useOAuthCallback.js` | `frontend/src/features/auth/composables/useOAuthCallback.js` | ✅ **已审计** |
| `useOAuthProviders.js` | `frontend/src/features/auth/composables/useOAuthProviders.js` | ✅ **已审计** |
| `authService.js` | `frontend/src/features/auth/service/authService.js` | ✅ **已审计** |
| `sessionService.js` | `frontend/src/features/auth/service/sessionService.js` | ✅ **已审计** |
| `web3WalletAuthService.js` | `frontend/src/features/auth/service/web3WalletAuthService.js` | ✅ **已审计** |
| `webAuthnService.js` | `frontend/src/features/auth/service/webAuthnService.js` | ✅ **已审计** |
| `authUserStore.js` | `frontend/src/features/auth/store/authUserStore.js` | ✅ **已审计** |
| `useBackupActions.js` | `frontend/src/features/backup/composables/useBackupActions.js` | ✅ **已审计** |
| `useBackupOperations.js` | `frontend/src/features/backup/composables/useBackupOperations.js` | ✅ **已审计** |
| `useBackupProviders.js` | `frontend/src/features/backup/composables/useBackupProviders.js` | ✅ **已审计** |
| `useBackupUI.js` | `frontend/src/features/backup/composables/useBackupUI.js` | ✅ **已审计** |
| `backupService.js` | `frontend/src/features/backup/service/backupService.js` | ✅ **已审计** |
| `backupStore.js` | `frontend/src/features/backup/store/backupStore.js` | ✅ **已审计** |
| `navigation.js` | `frontend/src/features/home/constants/navigation.js` | ✅ **已审计** |
| `layoutStore.js` | `frontend/src/features/home/store/layoutStore.js` | ✅ **已审计** |
| `useDataExport.js` | `frontend/src/features/migration/composables/useDataExport.js` | ✅ **已审计** |
| `useDataImport.js` | `frontend/src/features/migration/composables/useDataImport.js` | ✅ **已审计** |
| `dataMigrationService.js` | `frontend/src/features/migration/service/dataMigrationService.js` | ✅ **已审计** |
| `aegisExportStrategy.js` | `frontend/src/features/migration/strategies/aegisExportStrategy.js` | ✅ **已审计** |
| `aegisImportStrategy.js` | `frontend/src/features/migration/strategies/aegisImportStrategy.js` | ✅ **已审计** |
| `bitwardenAuthExportStrategy.js` | `frontend/src/features/migration/strategies/bitwardenAuthExportStrategy.js` | ✅ **已审计** |
| `bitwardenAuthImportStrategy.js` | `frontend/src/features/migration/strategies/bitwardenAuthImportStrategy.js` | ✅ **已审计** |
| `bitwardenPassImportStrategy.js` | `frontend/src/features/migration/strategies/bitwardenPassImportStrategy.js` | ✅ **已审计** |
| `csvExportStrategy.js` | `frontend/src/features/migration/strategies/csvExportStrategy.js` | ✅ **已审计** |
| `csvImportStrategy.js` | `frontend/src/features/migration/strategies/csvImportStrategy.js` | ✅ **已审计** |
| `enteAuthImportStrategy.js` | `frontend/src/features/migration/strategies/enteAuthImportStrategy.js` | ✅ **已审计** |
| `googleAuthExportStrategy.js` | `frontend/src/features/migration/strategies/googleAuthExportStrategy.js` | ✅ **已审计** |
| `googleAuthImportStrategy.js` | `frontend/src/features/migration/strategies/googleAuthImportStrategy.js` | ✅ **已审计** |
| `lastpassAuthImportStrategy.js` | `frontend/src/features/migration/strategies/lastpassAuthImportStrategy.js` | ✅ **已审计** |
| `nodeAuthHtmlExportStrategy.js` | `frontend/src/features/migration/strategies/nodeAuthHtmlExportStrategy.js` | ✅ **已审计** |
| `nodeAuthJsonExportStrategy.js` | `frontend/src/features/migration/strategies/nodeAuthJsonExportStrategy.js` | ✅ **已审计** |
| `nodeAuthJsonImportStrategy.js` | `frontend/src/features/migration/strategies/nodeAuthJsonImportStrategy.js` | ✅ **已审计** |
| `onePasswordImportStrategy.js` | `frontend/src/features/migration/strategies/onePasswordImportStrategy.js` | ✅ **已审计** |
| `otpauthExportStrategy.js` | `frontend/src/features/migration/strategies/otpauthExportStrategy.js` | ✅ **已审计** |
| `otpauthImportStrategy.js` | `frontend/src/features/migration/strategies/otpauthImportStrategy.js` | ✅ **已审计** |
| `phoneFactorImportStrategy.js` | `frontend/src/features/migration/strategies/phoneFactorImportStrategy.js` | ✅ **已审计** |
| `protonAuthExportStrategy.js` | `frontend/src/features/migration/strategies/protonAuthExportStrategy.js` | ✅ **已审计** |
| `protonAuthImportStrategy.js` | `frontend/src/features/migration/strategies/protonAuthImportStrategy.js` | ✅ **已审计** |
| `protonPassImportStrategy.js` | `frontend/src/features/migration/strategies/protonPassImportStrategy.js` | ✅ **已审计** |
| `steamImportStrategy.js` | `frontend/src/features/migration/strategies/steamImportStrategy.js` | ✅ **已审计** |
| `twoFasExportStrategy.js` | `frontend/src/features/migration/strategies/twoFasExportStrategy.js` | ✅ **已审计** |
| `twoFasImportStrategy.js` | `frontend/src/features/migration/strategies/twoFasImportStrategy.js` | ✅ **已审计** |
| `formatDetector.js` | `frontend/src/features/migration/utils/formatDetector.js` | ✅ **已审计** |
| `useOfflineReadiness.js` | `frontend/src/features/offline/composables/useOfflineReadiness.js` | ✅ **已审计** |
| `resourceRegistry.js` | `frontend/src/features/offline/services/resourceRegistry.js` | ✅ **已审计** |
| `offlineStore.js` | `frontend/src/features/offline/store/offlineStore.js` | ✅ **已审计** |
| `useTimeSync.js` | `frontend/src/features/tools/composables/useTimeSync.js` | ✅ **已审计** |
| `useTotpToolbox.js` | `frontend/src/features/tools/composables/useTotpToolbox.js` | ✅ **已审计** |
| `useTotpToolboxActions.js` | `frontend/src/features/tools/composables/useTotpToolboxActions.js` | ✅ **已审计** |
| `toolService.js` | `frontend/src/features/tools/service/toolService.js` | ✅ **已审计** |
| `useTotpTimer.js` | `frontend/src/features/vault/composables/useTotpTimer.js` | ✅ **已审计** |
| `useTrashList.js` | `frontend/src/features/vault/composables/useTrashList.js` | ✅ **已审计** |
| `useVaultActions.js` | `frontend/src/features/vault/composables/useVaultActions.js` | ✅ **已审计** |
| `useVaultDraggable.js` | `frontend/src/features/vault/composables/useVaultDraggable.js` | ✅ **已审计** |
| `useVaultList.js` | `frontend/src/features/vault/composables/useVaultList.js` | ✅ **已审计** |
| `trashService.js` | `frontend/src/features/vault/service/trashService.js` | ✅ **已审计** |
| `vaultService.js` | `frontend/src/features/vault/service/vaultService.js` | ✅ **已审计** |
| `vaultIconStore.js` | `frontend/src/features/vault/store/vaultIconStore.js` | ✅ **已审计** |
| `vaultStore.js` | `frontend/src/features/vault/store/vaultStore.js` | ✅ **已审计** |
| `vaultSyncStore.js` | `frontend/src/features/vault/store/vaultSyncStore.js` | ✅ **已审计** |
| `index.js` | `frontend/src/locales/index.js` | ✅ **已审计** |
| `main.js` | `frontend/src/main.js` | ✅ **已审计** |
| `useVisualViewport.js` | `frontend/src/shared/composables/useVisualViewport.js` | ✅ **已审计** |
| `themeStore.js` | `frontend/src/shared/stores/themeStore.js` | ✅ **已审计** |
| `asyncHelper.js` | `frontend/src/shared/utils/asyncHelper.js` | ✅ **已审计** |
| `common.js` | `frontend/src/shared/utils/common.js` | ✅ **已审计** |
| `crypto.js` | `frontend/src/shared/utils/crypto.js` | ✅ **已审计** |
| `device.js` | `frontend/src/shared/utils/device.js` | ✅ **已审计** |
| `encoding.js` | `frontend/src/shared/utils/encoding.js` | ✅ **已审计** |
| `authError.js` | `frontend/src/shared/utils/errors/authError.js` | ✅ **已审计** |
| `backupError.js` | `frontend/src/shared/utils/errors/backupError.js` | ✅ **已审计** |
| `migrationError.js` | `frontend/src/shared/utils/errors/migrationError.js` | ✅ **已审计** |
| `toolsError.js` | `frontend/src/shared/utils/errors/toolsError.js` | ✅ **已审计** |
| `vaultError.js` | `frontend/src/shared/utils/errors/vaultError.js` | ✅ **已审计** |
| `idb.js` | `frontend/src/shared/utils/idb.js` | ✅ **已审计** |
| `logger.js` | `frontend/src/shared/utils/logger.js` | ✅ **已审计** |
| `base.js` | `frontend/src/shared/utils/otp/base.js` | ✅ **已审计** |
| `index.js` | `frontend/src/shared/utils/otp/index.js` | ✅ **已审计** |
| `blizzard.js` | `frontend/src/shared/utils/otp/protocols/blizzard.js` | ✅ **已审计** |
| `hotp.js` | `frontend/src/shared/utils/otp/protocols/hotp.js` | ✅ **已审计** |
| `steam.js` | `frontend/src/shared/utils/otp/protocols/steam.js` | ✅ **已审计** |
| `totp.js` | `frontend/src/shared/utils/otp/protocols/totp.js` | ✅ **已审计** |
| `request.js` | `frontend/src/shared/utils/request.js` | ✅ **已审计** |
| `MemoryAsyncVFS.js` | `frontend/src/shared/utils/sqlite/MemoryAsyncVFS.js` | ✅ **已审计** |
| `MemoryVFS.js` | `frontend/src/shared/utils/sqlite/MemoryVFS.js` | ✅ **已审计** |
| `crypto.test.js` | `frontend/tests/core/crypto/crypto.test.js` | ✅ **已审计** |
| `appLockOverlay.test.js` | `frontend/tests/core/security/appLockOverlay.test.js` | ✅ **已审计** |
| `appSecurityLock.test.js` | `frontend/tests/core/security/appSecurityLock.test.js` | ✅ **已审计** |
| `authLifeCycle_tdd.test.js` | `frontend/tests/core/security/authLifeCycle_tdd.test.js` | ✅ **已审计** |
| `deviceIdentity_tdd.test.js` | `frontend/tests/core/security/deviceIdentity_tdd.test.js` | ✅ **已审计** |
| `securityFocus.test.js` | `frontend/tests/core/security/securityFocus.test.js` | ✅ **已审计** |
| `strategy4_offline_locks.test.js` | `frontend/tests/core/security/strategy4_offline_locks.test.js` | ✅ **已审计** |
| `hotp.test.js` | `frontend/tests/core/totp/hotp.test.js` | ✅ **已审计** |
| `steam_totp.test.js` | `frontend/tests/core/totp/steam_totp.test.js` | ✅ **已审计** |
| `strategy5_offline_time_sync.test.js` | `frontend/tests/core/totp/strategy5_offline_time_sync.test.js` | ✅ **已审计** |
| `totp.test.js` | `frontend/tests/core/totp/totp.test.js` | ✅ **已审计** |
| `useTotpTimer.test.js` | `frontend/tests/core/totp/useTotpTimer.test.js` | ✅ **已审计** |
| `layoutNavigation.test.js` | `frontend/tests/core/ui-ue/layoutNavigation.test.js` | ✅ **已审计** |
| `mobileBorders.test.js` | `frontend/tests/core/ui-ue/mobileBorders.test.js` | ✅ **已审计** |
| `mobileUX.test.js` | `frontend/tests/core/ui-ue/mobileUX.test.js` | ✅ **已审计** |
| `performanceStress.test.js` | `frontend/tests/core/ui-ue/performanceStress.test.js` | ✅ **已审计** |
| `resourceLoading.test.js` | `frontend/tests/core/ui-ue/resourceLoading.test.js` | ✅ **已审计** |
| `responsiveOverlay.test.js` | `frontend/tests/core/ui-ue/responsiveOverlay.test.js` | ✅ **已审计** |
| `swipeDiagnostic.test.js` | `frontend/tests/core/ui-ue/swipeDiagnostic.test.js` | ✅ **已审计** |
| `vaultSwipeActions_tdd.test.js` | `frontend/tests/core/ui-ue/vaultSwipeActions_tdd.test.js` | ✅ **已审计** |
| `zindexLayering.test.js` | `frontend/tests/core/ui-ue/zindexLayering.test.js` | ✅ **已审计** |
| `vault.spec.js` | `frontend/tests/e2e/vault.spec.js` | ✅ **已审计** |
| `visual.test.js` | `frontend/tests/e2e/visual.test.js` | ✅ **已审计** |
| `authFlow.test.js` | `frontend/tests/features/auth/authFlow.test.js` | ✅ **已审计** |
| `login.test.js` | `frontend/tests/features/auth/login.test.js` | ✅ **已审计** |
| `web3AuthService.test.js` | `frontend/tests/features/auth/web3AuthService.test.js` | ✅ **已审计** |
| `web3ComboAuth.test.js` | `frontend/tests/features/auth/web3ComboAuth.test.js` | ✅ **已审计** |
| `dataBackup.test.js` | `frontend/tests/features/backup/dataBackup.test.js` | ✅ **已审计** |
| `githubBackup.test.js` | `frontend/tests/features/backup/githubBackup.test.js` | ✅ **已审计** |
| `oauthIdbRelay.test.js` | `frontend/tests/features/backup/oauthIdbRelay.test.js` | ✅ **已审计** |
| `healthCheck.test.js` | `frontend/tests/features/health/healthCheck.test.js` | ✅ **已审计** |
| `home.test.js` | `frontend/tests/features/home/home.test.js` | ✅ **已审计** |
| `aegis_export_alignment.test.js` | `frontend/tests/features/migration/aegis_export_alignment.test.js` | ✅ **已审计** |
| `dataMigration.test.js` | `frontend/tests/features/migration/dataMigration.test.js` | ✅ **已审计** |
| `migrationUI.test.js` | `frontend/tests/features/migration/migrationUI.test.js` | ✅ **已审计** |
| `steam_import.test.js` | `frontend/tests/features/migration/steam_import.test.js` | ✅ **已审计** |
| `aegis.test.js` | `frontend/tests/features/migration/strategies/aegis.test.js` | ✅ **已审计** |
| `bitwarden.test.js` | `frontend/tests/features/migration/strategies/bitwarden.test.js` | ✅ **已审计** |
| `googleAuth.test.js` | `frontend/tests/features/migration/strategies/googleAuth.test.js` | ✅ **已审计** |
| `onePassword.test.js` | `frontend/tests/features/migration/strategies/onePassword.test.js` | ✅ **已审计** |
| `steam.test.js` | `frontend/tests/features/migration/strategies/steam.test.js` | ✅ **已审计** |
| `strategy7_import_ux.test.js` | `frontend/tests/features/migration/strategy7_import_ux.test.js` | ✅ **已审计** |
| `offlineBoundary.test.js` | `frontend/tests/features/offline/offlineBoundary.test.js` | ✅ **已审计** |
| `offlineConflict.test.js` | `frontend/tests/features/offline/offlineConflict.test.js` | ✅ **已审计** |
| `offlineMultiDbResilience.test.js` | `frontend/tests/features/offline/offlineMultiDbResilience.test.js` | ✅ **已审计** |
| `offlineMutation.test.js` | `frontend/tests/features/offline/offlineMutation.test.js` | ✅ **已审计** |
| `offlineRegistry.test.js` | `frontend/tests/features/offline/offlineRegistry.test.js` | ✅ **已审计** |
| `offlineStateArchitecture.test.js` | `frontend/tests/features/offline/offlineStateArchitecture.test.js` | ✅ **已审计** |
| `vaultList_offline.test.js` | `frontend/tests/features/offline/vaultList_offline.test.js` | ✅ **已审计** |
| `vaultService_offline.test.js` | `frontend/tests/features/offline/vaultService_offline.test.js` | ✅ **已审计** |
| `airGappedMode.test.js` | `frontend/tests/features/settings/airGappedMode.test.js` | ✅ **已审计** |
| `deviceManagement.test.js` | `frontend/tests/features/settings/deviceManagement.test.js` | ✅ **已审计** |
| `offlineReadiness.test.js` | `frontend/tests/features/settings/offlineReadiness.test.js` | ✅ **已审计** |
| `addAccount_unified.test.js` | `frontend/tests/features/vault/addAccount_unified.test.js` | ✅ **已审计** |
| `pagination_debug.test.js` | `frontend/tests/features/vault/pagination_debug.test.js` | ✅ **已审计** |
| `strategy3_workbox_icon.test.js` | `frontend/tests/features/vault/strategy3_workbox_icon.test.js` | ✅ **已审计** |
| `strategy6_offline_import.test.js` | `frontend/tests/features/vault/strategy6_offline_import.test.js` | ✅ **已审计** |
| `trash.test.js` | `frontend/tests/features/vault/trash.test.js` | ✅ **已审计** |
| `uiResilience.test.js` | `frontend/tests/features/vault/uiResilience.test.js` | ✅ **已审计** |
| `useVaultActions.test.js` | `frontend/tests/features/vault/useVaultActions.test.js` | ✅ **已审计** |
| `useVaultList.test.js` | `frontend/tests/features/vault/useVaultList.test.js` | ✅ **已审计** |
| `vaultDecoupling_tdd.test.js` | `frontend/tests/features/vault/vaultDecoupling_tdd.test.js` | ✅ **已审计** |
| `vaultList.test.js` | `frontend/tests/features/vault/vaultList.test.js` | ✅ **已审计** |
| `vaultList_master_tdd.test.js` | `frontend/tests/features/vault/vaultList_master_tdd.test.js` | ✅ **已审计** |
| `vaultList_performance_tdd.test.js` | `frontend/tests/features/vault/vaultList_performance_tdd.test.js` | ✅ **已审计** |
| `vaultReadiness.test.js` | `frontend/tests/features/vault/vaultReadiness.test.js` | ✅ **已审计** |
| `vaultReviveUI.test.js` | `frontend/tests/features/vault/vaultReviveUI.test.js` | ✅ **已审计** |
| `vaultSecurityIntegration.test.js` | `frontend/tests/features/vault/vaultSecurityIntegration.test.js` | ✅ **已审计** |
| `vaultSync.test.js` | `frontend/tests/features/vault/vaultSync.test.js` | ✅ **已审计** |
| `vaultSyncConflict.test.js` | `frontend/tests/features/vault/vaultSyncConflict.test.js` | ✅ **已审计** |
| `vaultSync_bugFix.test.js` | `frontend/tests/features/vault/vaultSync_bugFix.test.js` | ✅ **已审计** |
| `vault_architect_master.test.js` | `frontend/tests/features/vault/vault_architect_master.test.js` | ✅ **已审计** |
| `vault_decoupling.test.js` | `frontend/tests/features/vault/vault_decoupling.test.js` | ✅ **已审计** |
| `zeroKnowledge.test.js` | `frontend/tests/features/vault/zeroKnowledge.test.js` | ✅ **已审计** |
| `setup.test.js` | `frontend/tests/infra/setup.test.js` | ✅ **已审计** |
| `test-utils.js` | `frontend/tests/infra/test-utils.js` | ✅ **已审计** |
| `setup.js` | `frontend/tests/setup.js` | ✅ **已审计** |
| `ghost_clipboard.test.js` | `frontend/tests/shared/ghost_clipboard.test.js` | ✅ **已审计** |
| `vite.config.js` | `frontend/vite.config.js` | ✅ **已审计** |
| `decrypt_backup.js` | `scripts/decrypt_backup.js` | ✅ **已审计** |
| `inject_vars.js` | `scripts/inject_vars.js` | ✅ **已审计** |

</details>

<details>
<summary><b>TypeScript (110)</b></summary>

| 模块 | 位置 | 状态 |
| :--- | :--- | :--- |
| `config.ts` | `backend/src/app/config.ts` | ✅ **已审计** |
| `index.ts` | `backend/src/app/index.ts` | ✅ **已审计** |
| `server.ts` | `backend/src/app/server.ts` | ✅ **已审计** |
| `worker.ts` | `backend/src/app/worker.ts` | ✅ **已审计** |
| `authRoutes.ts` | `backend/src/features/auth/authRoutes.ts` | ✅ **已审计** |
| `authService.ts` | `backend/src/features/auth/authService.ts` | ✅ **已审计** |
| `baseOAuthProvider.ts` | `backend/src/features/auth/providers/baseOAuthProvider.ts` | ✅ **已审计** |
| `cloudflareAccessProvider.ts` | `backend/src/features/auth/providers/cloudflareAccessProvider.ts` | ✅ **已审计** |
| `giteeProvider.ts` | `backend/src/features/auth/providers/giteeProvider.ts` | ✅ **已审计** |
| `githubProvider.ts` | `backend/src/features/auth/providers/githubProvider.ts` | ✅ **已审计** |
| `googleProvider.ts` | `backend/src/features/auth/providers/googleProvider.ts` | ✅ **已审计** |
| `index.ts` | `backend/src/features/auth/providers/index.ts` | ✅ **已审计** |
| `nodeLocProvider.ts` | `backend/src/features/auth/providers/nodeLocProvider.ts` | ✅ **已审计** |
| `telegramProvider.ts` | `backend/src/features/auth/providers/telegramProvider.ts` | ✅ **已审计** |
| `sessionService.ts` | `backend/src/features/auth/sessionService.ts` | ✅ **已审计** |
| `wcProxyRoutes.ts` | `backend/src/features/auth/wcProxyRoutes.ts` | ✅ **已审计** |
| `web3WalletAuthService.ts` | `backend/src/features/auth/web3WalletAuthService.ts` | ✅ **已审计** |
| `webAuthnService.ts` | `backend/src/features/auth/webAuthnService.ts` | ✅ **已审计** |
| `backupRoutes.ts` | `backend/src/features/backup/backupRoutes.ts` | ✅ **已审计** |
| `backupService.ts` | `backend/src/features/backup/backupService.ts` | ✅ **已审计** |
| `backupProvider.ts` | `backend/src/features/backup/providers/backupProvider.ts` | ✅ **已审计** |
| `baiduNetdiskProvider.ts` | `backend/src/features/backup/providers/baiduNetdiskProvider.ts` | ✅ **已审计** |
| `dropboxProvider.ts` | `backend/src/features/backup/providers/dropboxProvider.ts` | ✅ **已审计** |
| `emailProvider.ts` | `backend/src/features/backup/providers/emailProvider.ts` | ✅ **已审计** |
| `githubProvider.ts` | `backend/src/features/backup/providers/githubProvider.ts` | ✅ **已审计** |
| `googleDriveProvider.ts` | `backend/src/features/backup/providers/googleDriveProvider.ts` | ✅ **已审计** |
| `index.ts` | `backend/src/features/backup/providers/index.ts` | ✅ **已审计** |
| `oneDriveProvider.ts` | `backend/src/features/backup/providers/oneDriveProvider.ts` | ✅ **已审计** |
| `s3Provider.ts` | `backend/src/features/backup/providers/s3Provider.ts` | ✅ **已审计** |
| `telegramProvider.ts` | `backend/src/features/backup/providers/telegramProvider.ts` | ✅ **已审计** |
| `webDavProvider.ts` | `backend/src/features/backup/providers/webDavProvider.ts` | ✅ **已审计** |
| `emergencyRoutes.ts` | `backend/src/features/emergency/emergencyRoutes.ts` | ✅ **已审计** |
| `healthRoutes.ts` | `backend/src/features/health/healthRoutes.ts` | ✅ **已审计** |
| `telegramRoutes.ts` | `backend/src/features/telegram/telegramRoutes.ts` | ✅ **已审计** |
| `telegramService.ts` | `backend/src/features/telegram/telegramService.ts` | ✅ **已审计** |
| `toolsRoutes.ts` | `backend/src/features/tools/toolsRoutes.ts` | ✅ **已审计** |
| `trashService.ts` | `backend/src/features/vault/trashService.ts` | ✅ **已审计** |
| `vaultRoutes.ts` | `backend/src/features/vault/vaultRoutes.ts` | ✅ **已审计** |
| `vaultService.ts` | `backend/src/features/vault/vaultService.ts` | ✅ **已审计** |
| `d1Executor.ts` | `backend/src/shared/db/d1Executor.ts` | ✅ **已审计** |
| `db.ts` | `backend/src/shared/db/db.ts` | ✅ **已审计** |
| `dialects.ts` | `backend/src/shared/db/dialects.ts` | ✅ **已审计** |
| `executor.ts` | `backend/src/shared/db/executor.ts` | ✅ **已审计** |
| `factory.ts` | `backend/src/shared/db/factory.ts` | ✅ **已审计** |
| `migrator.ts` | `backend/src/shared/db/migrator.ts` | ✅ **已审计** |
| `mySqlExecutor.ts` | `backend/src/shared/db/mySqlExecutor.ts` | ✅ **已审计** |
| `pgExecutor.ts` | `backend/src/shared/db/pgExecutor.ts` | ✅ **已审计** |
| `backupRepository.ts` | `backend/src/shared/db/repositories/backupRepository.ts` | ✅ **已审计** |
| `emergencyRepository.ts` | `backend/src/shared/db/repositories/emergencyRepository.ts` | ✅ **已审计** |
| `sessionRepository.ts` | `backend/src/shared/db/repositories/sessionRepository.ts` | ✅ **已审计** |
| `vaultRepository.ts` | `backend/src/shared/db/repositories/vaultRepository.ts` | ✅ **已审计** |
| `index.ts` | `backend/src/shared/db/schema/index.ts` | ✅ **已审计** |
| `mysql.ts` | `backend/src/shared/db/schema/mysql.ts` | ✅ **已审计** |
| `pg.ts` | `backend/src/shared/db/schema/pg.ts` | ✅ **已审计** |
| `sqlite.ts` | `backend/src/shared/db/schema/sqlite.ts` | ✅ **已审计** |
| `sqliteExecutor.ts` | `backend/src/shared/db/sqliteExecutor.ts` | ✅ **已审计** |
| `auth.ts` | `backend/src/shared/middleware/auth.ts` | ✅ **已审计** |
| `rateLimitMiddleware.ts` | `backend/src/shared/middleware/rateLimitMiddleware.ts` | ✅ **已审计** |
| `common.ts` | `backend/src/shared/utils/common.ts` | ✅ **已审计** |
| `crypto.ts` | `backend/src/shared/utils/crypto.ts` | ✅ **已审计** |
| `health.ts` | `backend/src/shared/utils/health.ts` | ✅ **已审计** |
| `logger.ts` | `backend/src/shared/utils/logger.ts` | ✅ **已审计** |
| `masking.ts` | `backend/src/shared/utils/masking.ts` | ✅ **已审计** |
| `base.ts` | `backend/src/shared/utils/otp/base.ts` | ✅ **已审计** |
| `index.ts` | `backend/src/shared/utils/otp/index.ts` | ✅ **已审计** |
| `blizzard.ts` | `backend/src/shared/utils/otp/protocols/blizzard.ts` | ✅ **已审计** |
| `hotp.ts` | `backend/src/shared/utils/otp/protocols/hotp.ts` | ✅ **已审计** |
| `steam.ts` | `backend/src/shared/utils/otp/protocols/steam.ts` | ✅ **已审计** |
| `totp.ts` | `backend/src/shared/utils/otp/protocols/totp.ts` | ✅ **已审计** |
| `staticServer.ts` | `backend/src/shared/utils/staticServer.ts` | ✅ **已审计** |
| `ua.ts` | `backend/src/shared/utils/ua.ts` | ✅ **已审计** |
| `blizzard.test.ts` | `backend/tests/core/crypto/blizzard.test.ts` | ✅ **已审计** |
| `hotp.test.ts` | `backend/tests/core/crypto/hotp.test.ts` | ✅ **已审计** |
| `totp.test.ts` | `backend/tests/core/crypto/totp.test.ts` | ✅ **已审计** |
| `zeroKnowledge.test.ts` | `backend/tests/core/crypto/zeroKnowledge.test.ts` | ✅ **已审计** |
| `comprehensive.test.ts` | `backend/tests/core/db/comprehensive.test.ts` | ✅ **已审计** |
| `d1Executor.test.ts` | `backend/tests/core/db/d1Executor.test.ts` | ✅ **已审计** |
| `dialects.test.ts` | `backend/tests/core/db/dialects.test.ts` | ✅ **已审计** |
| `executor.test.ts` | `backend/tests/core/db/executor.test.ts` | ✅ **已审计** |
| `factory.test.ts` | `backend/tests/core/db/factory.test.ts` | ✅ **已审计** |
| `integration.test.ts` | `backend/tests/core/db/integration.test.ts` | ✅ **已审计** |
| `repositories.test.ts` | `backend/tests/core/db/repositories.test.ts` | ✅ **已审计** |
| `logger.test.ts` | `backend/tests/core/infra/logger.test.ts` | ✅ **已审计** |
| `staticServer.test.ts` | `backend/tests/core/infra/staticServer.test.ts` | ✅ **已审计** |
| `license.test.ts` | `backend/tests/core/license/license.test.ts` | ✅ **已审计** |
| `envNormalization.test.ts` | `backend/tests/core/security/envNormalization.test.ts` | ✅ **已审计** |
| `rateLimitMiddleware.test.ts` | `backend/tests/core/security/rateLimitMiddleware.test.ts` | ✅ **已审计** |
| `authService.test.ts` | `backend/tests/features/auth/authService.test.ts` | ✅ **已审计** |
| `deviceSession_tdd.test.ts` | `backend/tests/features/auth/deviceSession_tdd.test.ts` | ✅ **已审计** |
| `sessionRoutes.test.ts` | `backend/tests/features/auth/sessionRoutes.test.ts` | ✅ **已审计** |
| `sessionService.test.ts` | `backend/tests/features/auth/sessionService.test.ts` | ✅ **已审计** |
| `web3AuthService.test.ts` | `backend/tests/features/auth/web3AuthService.test.ts` | ✅ **已审计** |
| `backupService.test.ts` | `backend/tests/features/backup/backupService.test.ts` | ✅ **已审计** |
| `githubProvider.test.ts` | `backend/tests/features/backup/githubProvider.test.ts` | ✅ **已审计** |
| `oauthIdbRelay.test.ts` | `backend/tests/features/backup/oauthIdbRelay.test.ts` | ✅ **已审计** |
| `telegramProvider.test.ts` | `backend/tests/features/telegram/telegramProvider.test.ts` | ✅ **已审计** |
| `telegramRoutes.test.ts` | `backend/tests/features/telegram/telegramRoutes.test.ts` | ✅ **已审计** |
| `hotp_api.test.ts` | `backend/tests/features/vault/hotp_api.test.ts` | ✅ **已审计** |
| `hotp_service.test.ts` | `backend/tests/features/vault/hotp_service.test.ts` | ✅ **已审计** |
| `trash.test.ts` | `backend/tests/features/vault/trash.test.ts` | ✅ **已审计** |
| `vaultConflict.test.ts` | `backend/tests/features/vault/vaultConflict.test.ts` | ✅ **已审计** |
| `vaultRevive.test.ts` | `backend/tests/features/vault/vaultRevive.test.ts` | ✅ **已审计** |
| `vaultRoutes.test.ts` | `backend/tests/features/vault/vaultRoutes.test.ts` | ✅ **已审计** |
| `vaultService.test.ts` | `backend/tests/features/vault/vaultService.test.ts` | ✅ **已审计** |
| `vaultSync.test.ts` | `backend/tests/features/vault/vaultSync.test.ts` | ✅ **已审计** |
| `vaultZeroKnowledge.test.ts` | `backend/tests/features/vault/vaultZeroKnowledge.test.ts` | ✅ **已审计** |
| `tsup.config.ts` | `backend/tsup.config.ts` | ✅ **已审计** |
| `vitest.config.ts` | `backend/vitest.config.ts` | ✅ **已审计** |
| `auto-imports.d.ts` | `frontend/auto-imports.d.ts` | ✅ **已审计** |
| `components.d.ts` | `frontend/components.d.ts` | ✅ **已审计** |

</details>

--- 

## ⚠️ 操作指南

如果您看到 **FAIL** 状态或严重的代码问题：
1. **开发人员**：使用上方表格中的 **位置** 列找到确切的文件和行号。
2. **纠正**：遵循为每个规则提供的文档链接以提交修复。
3. **可追溯性**：完整的原始 `.sarif` 数据已附加到此分支。下载并将其导入您的 IDE（例如 VS Code SARIF 查看器）进行本地分析。

--- 

💡 *由 Antigravity AI 安全引擎生成。透明度是我们的承诺。*