<script>
  import { Button, Card, Listgroup, ListgroupItem } from 'flowbite-svelte';
  import { getContext } from 'svelte';
  let surgeryInfo = getContext('surgeryInfo');
  let items = getContext('order');
</script>

<Card class="w-full max-w-full rounded-none">
  <section class="bg-white py-6 antialiased dark:bg-gray-900 md:py-16 rounded-xl">
    <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-3xl">
        <div class="flex flex-col gap-3">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Thanks for your order!</h2>
          <p class="text-sm">
            Your order <a href="#" class="text-primary-500 underline">7564804</a> will be processed within 24 hours during working days. We will notify
            you by email once your order has been shipped.
          </p>
        </div>

        <div class="mt-6 space-y-4border-t border-gray-200 dark:border-gray-700 sm:mt-8">
          <h2 class="text-md text-gray-900 dark:text-white sm:text-2xl mb-4">Order Summary</h2>
          <Card class="flex flex-col gap-4 w-full min-w-full">
            <dl>
              <dt class="text-base text-sm text-gray-900 dark:text-white">Surgeon</dt>
              <dd class="text-base font-normal text-sm text-gray-500 dark:text-gray-400">{$surgeryInfo.name}</dd>
            </dl>
            <dl>
              <dt class="text-base text-sm text-gray-900 dark:text-white">Hospital</dt>
              <dd class="text-base font-normal text-sm text-gray-500 dark:text-gray-400">{$surgeryInfo.hospital}</dd>
            </dl>
            <dl>
              <dt class="text-base text-sm text-gray-900 dark:text-white">Surgery Date</dt>
              <dd class="text-base font-normal text-sm text-gray-500 dark:text-gray-400">{$surgeryInfo.date}</dd>
            </dl>
            <dl>
              <dt class="text-base text-sm text-gray-900 dark:text-white">Product Name</dt>
              <dd class="text-base font-normal text-sm text-gray-500 dark:text-gray-400">Stand Alone Alif</dd>
            </dl>
          </Card>
        </div>

        <div class="mt-6 sm:mt-8">
          <div class="relative overflow-x-auto border-gray-200 dark:border-gray-800">
            <table class="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                {#each $items as item}
                  <tr>
                    <td class="whitespace-nowrap py-4 md:w-[384px] flex flex-col gap-3">
                      <div class="flex items-center gap-4">
                        <a href="#" class="hover:underline text-sm">{item.name}</a>
                      </div>

                      {#if item.fieldType === 'radio'}
                        <Card>
                          {#if item.selectedValue === 'ac'}Acute{/if}
                          {#if item.selectedValue === 'st'}Self Tapping{/if}
                          {#if item.selectedValue === 'sd'}Self Drilling{/if}
                        </Card>
                      {/if}
                      {#if item.fieldType === 'quantity'}
                        <Listgroup active class="w-full">
                          {#each item.variations as variation}
                            {#if variation.quantity > 0}
                              <ListgroupItem class="text-base font-semibold gap-2">
                                <div class="w-full flex flex-row justify-between">
                                  <span class="text-sm">{variation.name}</span>
                                  <span class="text-sm">{variation.quantity}</span>
                                </div>
                              </ListgroupItem>
                            {/if}
                          {/each}
                        </Listgroup>
                      {/if}
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>

          <div class="mt-4 space-y-6">
            <div class="flex flex-col gap-4 mt-6">
              <Button color="alternative" href="/dashboard" class="w-full">Return to Dashboard</Button>
              <Button class="w-full" color="light">Contact Customer Support</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</Card>
