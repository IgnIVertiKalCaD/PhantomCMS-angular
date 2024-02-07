export type InputSelectDto = {
  text: string,

  extra?: Partial<
    {
      value: number | null,
      currency: string,
    }>,
  icon?: string,
  router?: string,
}
